/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as parser from '@babel/parser';
import * as Traverse from '@babel/traverse';
import { parse } from './parse';

import { NormalizedNode, Analysis } from './types';
import { getNodeKey, getNodePath, accessNode } from './utils';
import { generateMermaidGraph } from './graph';

const plugins = [
  'jsx',
  'typescript',
  'asyncGenerators',
  'bigInt',
  'classProperties',
  'classPrivateProperties',
  'classPrivateMethods',
  ['decorators', { decoratorsBeforeExport: false }],
  'doExpressions',
  'dynamicImport',
  'exportDefaultFrom',
  'exportNamespaceFrom',
  'functionBind',
  'functionSent',
  'importMeta',
  'logicalAssignment',
  'nullishCoalescingOperator',
  'numericSeparator',
  'objectRestSpread',
  'optionalCatchBinding',
  'optionalChaining',
  'partialApplication',
  ['pipelineOperator', { proposal: 'minimal' }],
  'throwExpressions',
  'topLevelAwait',
];
const babelParserOptions = {
  allowImportExportEverywhere: true,
  allowAwaitOutsideFunction: true,
  plugins: plugins as parser.ParserPlugin[],
  decoratorsBeforeExport: true,
};
let cache: Record<string, NormalizedNode> = {};

const NODES_DEFINING_SCOPES: Record<string, boolean> = {
  Program: true,
  FunctionDeclaration: true,
  FunctionExpression: true,
  ArrowFunctionExpression: true,
  ClassDeclaration: true,
  ClassMethod: true,
  ObjectMethod: true,
};

const VARIABLES_NODE_TYPES: Record<string, boolean> = {
  VariableDeclarator: true,
  FunctionDeclaration: true,
};

function toNormalizeNode(
  n: Traverse.NodePath,
  stack: NormalizedNode[]
): NormalizedNode {
  const scopePath = stack.map(item => item.key).join('.');
  const key = getNodeKey(n.node);
  if (cache[key]) {
    return cache[key];
  }
  const node = parse(
    n.node,
    n.parentPath ? n.parentPath.node : null,
    n.parentPath && n.parentPath.parentPath
      ? n.parentPath.parentPath.node
      : null
  );
  if (node.key) cache[node.key] = node;
  node.scopePath = scopePath;
  node.nesting = scopePath === '' ? 0 : scopePath.split('.').length;
  node.path = getNodePath(n);
  node.isScope = !!NODES_DEFINING_SCOPES[node.type];
  node.isVariable = !!VARIABLES_NODE_TYPES[node.type];

  if (node.meta && node.meta.params) {
    if (!node.variables) node.variables = [];
    node.meta.params.forEach((p: string) => node.variables.push(p));
  }
  return node;
}

function generateTree(nodes: NormalizedNode[]): NormalizedNode {
  const dict: Record<string, NormalizedNode> = nodes.reduce(
    (res: Record<string, NormalizedNode>, n) => {
      res[n.key || ''] = n;
      return res;
    },
    {}
  );
  nodes.forEach(node => {
    const parentNode = dict[node.parent];
    if (parentNode) {
      if (!parentNode.children) parentNode.children = [];
      parentNode.children.push(node);
    }
  });
  return nodes.find(n => n.type === 'Program');
}

export function analyze(code: string) {
  const ast = parser.parse(code, babelParserOptions);
  const nodes: NormalizedNode[] = [];
  const scopes: NormalizedNode[] = [];
  const stack: NormalizedNode[] = [];
  const consumedNodes: Record<string, boolean> = {};

  cache = {};
  Traverse.default(ast, {
    enter(path: Traverse.NodePath) {
      const node = toNormalizeNode(path, stack);

      if (consumedNodes[node.key]) return;
      consumedNodes[node.key] = true;

      nodes.push(node);

      if (node.isVariable) {
        const currentScope = stack[stack.length - 1];
        if (currentScope) {
          if (!currentScope.variables) currentScope.variables = [];
          currentScope.variables.push(node.key);
        }
      }
      if (node.isScope) {
        stack.push(node);
        scopes.push(node);
      }
    },
    exit(path: Traverse.NodePath) {
      const node = toNormalizeNode(path, stack);
      if (NODES_DEFINING_SCOPES[node.type]) {
        stack.pop();
      }
    },
  });

  const getNodeByKey = accessNode(nodes);

  return {
    ast,
    tree: generateTree(nodes),
    nodes,
    scopes,
    variables: nodes.reduce((res: NormalizedNode[], node: NormalizedNode) => {
      if (node.isVariable) {
        res.push(node);
      }
      if (node.meta && node.meta.params) {
        node.meta.params.forEach((p: string) => res.push(getNodeByKey(p)));
      }
      return res;
    }, []),
  };
}

export function sort(nodes: NormalizedNode[]): NormalizedNode[] {
  const consumed: Record<string, boolean> = {};
  // console.log(nodes);
  return (
    nodes
      // removing duplicates
      .filter(node => {
        if (!consumed[node.key || '']) {
          consumed[node.key || ''] = true;
          return true;
        }
        return false;
      })
      // sorting
      .sort((a, b) => {
        if (a.start[0] === b.start[0]) {
          if (a.start[1] > b.start[1]) {
            return 1;
          }
          if (a.start[1] === b.start[1]) {
            return a.end[0] > b.end[0] ? -1 : 1;
          }
          return -1;
        }
        if (a.start[0] > b.start[0]) {
          return 1;
        }
        return -1;
      })
  );
}

export function isVariable(node: NormalizedNode): boolean {
  return !!VARIABLES_NODE_TYPES[node.type];
}

export function toMermaidGraph(analysis: Analysis): string {
  return generateMermaidGraph(analysis);
}
