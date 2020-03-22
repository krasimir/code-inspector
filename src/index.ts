/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as parser from '@babel/parser';
import * as Traverse from '@babel/traverse';
import T from '@babel/types';
import { parse } from './parse';

import { NormalizedNode } from './types';

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

export function analyze(code: string) {
  try {
    const ast = parser.parse(code, babelParserOptions);
    const nodes: NormalizedNode[] = [];
    // console.log(code, '\n\n', ast.program.body);
    // @ts-ignore
    Traverse.default(ast, {
      enter(path: Traverse.NodePath) {
        // console.log('->', path.type);
        const normalizedNode = parse(path.node);
        if (normalizedNode) {
          nodes.push(normalizedNode);
        }
      },
      exit(path: Traverse.NodePath) {
        // exit
      },
    });
    return {
      nodes,
    };
  } catch (err) {
    console.log('Error parsing to ast');
    console.log(err);
    return { nodes: [] };
  }
}
