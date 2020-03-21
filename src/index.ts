/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as parser from '@babel/parser';
import * as Traverse from '@babel/traverse';
import T from '@babel/types';
import parse from './parsers/parse';

const DEBUG = false;
let DEBUG_LOG: any[] = [];

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

export function analyze(code: string, line: number, column: number) {
  DEBUG_LOG = [];
  column -= 1;
  try {
    const ast = parser.parse(code, babelParserOptions);
    // @ts-ignore
    Traverse.default(ast, {
      enter(path: Traverse.NodePath) {
        console.log(path.type);
      },
    });
  } catch (err) {
    console.log('Error parsing to ast');
    console.log(err);
    return {};
  }
}
