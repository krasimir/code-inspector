/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as BabelParser from '@babel/parser';
import { visit, Type, ASTNode } from 'ast-types';
import uniq from 'lodash/uniq';

import { NodePath } from 'ast-types/lib/node-path';
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
    'ArrowFunctionExpression',
    'NewExpression',
    'ArrayExpression',
    'FunctionExpression',
    'IfStatement',
    'StringLiteral',
    'ForStatement',
    'SwitchStatement',
    'SwitchCase',
    'ExportDefaultDeclaration',
  ];
  const STOP_AT = ['ObjectMethod', 'ObjectProperty'];
  (function up(p) {
    chain.push(p);
    if (p.parentPath) {
      up(p.parentPath);
    }
  })(path);
  chain.reverse();
  // finding the last occurrence of the token
  const stopAtIdx = Math.max(
    ...chain.map((p, i) => (STOP_AT.includes(p.value.type) ? i : 0))
  );
  let stop = false;
  chain = chain.reduce((res: string[], pathItem, i) => {
    if (stop) {
      return res;
    }
    const parsed = parse(pathItem.value);
    if (pathItem && parsed && !IGNORE.includes(pathItem.value.type as string)) {
      res.push(parsed as string);
    }
    if (i !== 0 && i === stopAtIdx) {
      stop = true;
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
          if (DEBUG) {
            DEBUG_LOG.push(`${path.value.type} (${parse(path.value)})`);
          }
          // console.log('\n', path.value);
          breadcrumbs = extractBreadcrumbsNodes(path);
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
