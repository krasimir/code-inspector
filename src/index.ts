/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as parser from '@babel/parser';
import * as Traverse from '@babel/traverse';
import { parse } from './parse';

import { NormalizedNode } from './types';
import { getNodeKey, getNestedLevel } from './utils';

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

const SCOPE_NODE_TYPES_TO_IGNORE: Record<string, boolean> = {
  BlockStatement: true,
  ObjectPattern: true,
  AssignmentPattern: true,
};

const VARIABLES_NODE_TYPES: Record<string, boolean> = {
  VariableDeclarator: true,
};

function toNormalizeNode(n: Traverse.NodePath): NormalizedNode {
  const key = getNodeKey(n.node);
  if (cache[key]) {
    return cache[key];
  }
  const normalizedNode = parse(
    n.node,
    n.parentPath ? n.parentPath.node : null,
    n.parentPath && n.parentPath.parentPath
      ? n.parentPath.parentPath.node
      : null
  );
  if (normalizedNode.key) cache[normalizedNode.key] = normalizedNode;
  normalizedNode.nesting = getNestedLevel(n.scope.path);

  return normalizedNode;
}

export function analyze(code: string) {
  const ast = parser.parse(code, babelParserOptions);
  const nodes: NormalizedNode[] = [];
  const scopes: NormalizedNode[] = [];
  const consumedNodes: Record<string, boolean> = {};
  const consumedScopes: Record<string, boolean> = {};

  cache = {};
  Traverse.default(ast, {
    enter(path: Traverse.NodePath) {
      const normalizedNode = toNormalizeNode(path);
      const scopeNode = toNormalizeNode(path.scope.path);
      if (normalizedNode && !consumedNodes[normalizedNode.key || '']) {
        consumedNodes[normalizedNode.key || ''] = true;
        nodes.push(normalizedNode);
      }
      if (
        scopeNode &&
        !consumedScopes[scopeNode.key || ''] &&
        !SCOPE_NODE_TYPES_TO_IGNORE[scopeNode.type]
      ) {
        consumedScopes[scopeNode.key || ''] = true;
        scopes.push(scopeNode);
      }
    },
    exit(path: Traverse.NodePath) {
      // exit
    },
  });
  return {
    ast,
    nodes,
    scopes,
    variables: nodes.filter(({ type }) => VARIABLES_NODE_TYPES[type]),
  };
}
