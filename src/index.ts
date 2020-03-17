/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as BabelParser from '@babel/parser';
import { visit, Type, ASTNode } from 'ast-types';
import uniq from 'lodash/uniq';
import get from 'lodash/get';

import { NodePath } from 'ast-types/lib/node-path';
import { BreadcrumbsNodesParser } from './types';

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

const VALID_BREADCRUMBS_NODES: BreadcrumbsNodesParser = {
  ClassMethod: {
    parse: (node: any) => get(node, 'key.name', 'class method'),
  },
  ClassDeclaration: {
    parse: (node: any) => get(node, 'id.name', 'class declaration'),
  },
  VariableDeclarator: {
    parse: (node: any) => get(node, 'id.name', 'declarator'),
  },
  VariableDeclaration: {
    parse: (node: any) => {
      const declarationNode = get(node, 'declarations.0', null);
      if (declarationNode === null) {
        return 'VariableDeclaration';
      }
      if (declarationNode.id.name) {
        return declarationNode.id.name;
      }
      if (declarationNode.id.type === 'ObjectPattern') {
        return `{${declarationNode.id.properties
          .map((p: any) => get(p, 'key.name', 'var'))
          .join(',')}}`;
      }
      if (declarationNode.id.type === 'ArrayPattern') {
        return `[${declarationNode.id.elements
          .map((e: any) => get(e, 'name', 'var'))
          .join(',')}]`;
      }
      return 'variable';
    },
  },
  ArrowFunctionExpression: {
    parse: (node: any) => 'ƒ',
  },
  ObjectProperty: {
    parse: (node: any) => get(node, 'key.name'),
  },
  FunctionDeclaration: {
    parse: (node: any) => node.id.name,
  },
};

function extractBreadcrumbsNodes(path: NodePath): string[] {
  let chain = [];
  (function up(p) {
    chain.push(p);
    if (p.parentPath) {
      up(p.parentPath);
    }
  })(path);
  chain = chain.reduce((res: string[], pathItem) => {
    if (
      pathItem &&
      Object.keys(VALID_BREADCRUMBS_NODES).includes(pathItem.value.type)
    ) {
      res.push(
        VALID_BREADCRUMBS_NODES[pathItem.value.type].parse(pathItem.value)
      );
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
          // console.log(
          //   `${start.line}:${start.column}`,
          //   path.value.type,
          //   `${end.line}:${end.column}`
          // );
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
    return {
      breadcrumbs,
    };
  } catch (err) {
    console.log('Error parsing to ast');
    console.log(err);
    return {};
  }
}
