/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as BabelParser from '@babel/parser';
import { visit, Type, ASTNode } from 'ast-types';
import uniq from 'lodash/uniq';

import { NodePath } from 'ast-types/lib/node-path';
import parse from './parsers/parse';

const DEBUG = true;
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
  plugins: plugins as BabelParser.ParserPlugin[],
  decoratorsBeforeExport: true,
};

function extractBreadcrumbsNodes(path: NodePath): string[] {
  let chain = [];
  const IGNORE = [
    'File',
    'Program',
    'ExportNamedDeclaration',
    'ClassBody',
    'BlockStatement',
    'ExpressionStatement',
    'ObjectExpression',
    'TryStatement',
    'ReturnStatement',
  ];
  const STOP_AT = ['CallExpression'];
  (function up(p) {
    if (DEBUG) {
      DEBUG_LOG.push(p.value.type);
    }
    chain.push(p);
    if (p.parentPath) {
      up(p.parentPath);
    }
  })(path);
  chain = chain.reduce((res: string[], pathItem) => {
    const parsed = parse(pathItem.value);
    if (pathItem && parsed && !IGNORE.includes(parsed as string)) {
      res.push(parsed as string);
    }
    return res;
  }, []);
  return uniq(chain);
}

export function toAST(code: string): ASTNode {
  return BabelParser.parse(code, babelParserOptions);
}

export function analyze(
  code: string | ASTNode,
  line: number,
  position: number
) {
  DEBUG_LOG = [];
  position -= 1;
  let ast: ASTNode;
  if (typeof code === 'string') {
    ast = toAST(code);
  } else {
    ast = code;
  }
  try {
    let breadcrumbs: string[] = [];

    visit(ast, {
      visitNode(path) {
        const { start, end } = path.value.loc;
        if (line >= start.line && line <= end.line) {
          if (line === start.line && position < start.column) {
            this.traverse(path);
            return;
          }
          if (line === end.line && position > end.column) {
            this.traverse(path);
            return;
          }
          // console.log('\n', path.value);
          breadcrumbs = extractBreadcrumbsNodes(path).reverse();
        }
        this.traverse(path);
      },
    });
    if (DEBUG) {
      console.log(DEBUG_LOG);
    }
    return {
      breadcrumbs,
    };
  } catch (err) {
    console.log('Error parsing to ast');
    console.log(err);
    return {};
  }
}
