/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as parser from '@babel/parser';
import * as Traverse from '@babel/traverse';
import { parse } from './parse';

import { NormalizedNode } from './types';
import filterToScopeNodes from './api/scope';

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

function toNormalizeNode(n: Traverse.NodePath): NormalizedNode {
  return parse(
    n.node,
    n.parentPath ? n.parentPath.node : null,
    n.parentPath && n.parentPath.parentPath
      ? n.parentPath.parentPath.node
      : null
  );
}

function getNestedLevel(node: Traverse.NodePath, level = 0): number {
  if (node.scope.path.parentPath) {
    return getNestedLevel(node.scope.path.parentPath, level + 1);
  }
  return level;
}

export function analyze(code: string) {
  try {
    const ast = parser.parse(code, babelParserOptions);
    const nodes: NormalizedNode[] = [];
    const scopes: NormalizedNode[] = [];
    Traverse.default(ast, {
      enter(path: Traverse.NodePath) {
        const normalizedNode = toNormalizeNode(path);
        const scopeNode = toNormalizeNode(path.scope.path);
        scopeNode.nesting = getNestedLevel(path.scope.path);
        if (normalizedNode) {
          nodes.push(normalizedNode);
        }
        if (scopeNode) {
          scopes.push(scopeNode);
        }
      },
      exit(path: Traverse.NodePath) {
        // exit
      },
    });
    return {
      nodes,
      scopes: filterToScopeNodes(scopes),
    };
  } catch (err) {
    console.log('Error parsing to ast');
    console.log(err);
    return { nodes: [], scopes: [] };
  }
}
