import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ArrowFunctionExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  const meta = {
    funcName: 'ƒ',
    params: node.params.map(p => helpers.parse(p).key),
  };
  if (parent) {
    if (parent.type === 'CallExpression') {
      return {
        type: 'ArrowFunctionExpression',
        text: `${helpers.parse(parent).text} callback`,
        ...helpers.normalizeLoc(node.loc),
        meta,
      };
    }
    if (parent.type === 'NewExpression') {
      return {
        type: 'ArrowFunctionExpression',
        text: `new ${helpers.parse(parent.callee).text}(…) argument`,
        ...helpers.normalizeLoc(node.loc),
        meta,
      };
    }
    if (parent.type === 'VariableDeclarator') {
      return {
        type: 'ArrowFunctionExpression',
        text: `${helpers.parse(parent).text}${helpers.renderFunctionParameters(
          node
        )}`,
        ...helpers.normalizeLoc(node.loc),
        meta,
      };
    }
    if (parent.type === 'ObjectProperty') {
      return {
        type: 'ArrowFunctionExpression',
        text: `${helpers.parse(parent).text}: ƒ`,
        ...helpers.normalizeLoc(node.loc),
        meta,
      };
    }
    if (parent.type === 'JSXExpressionContainer') {
      return {
        type: 'ArrowFunctionExpression',
        text: `${helpers.parse(grandParent).text}`,
        ...helpers.normalizeLoc(node.loc),
        meta,
      };
    }
  }
  return {
    type: 'ArrowFunctionExpression',
    text: 'ƒ',
    ...helpers.normalizeLoc(node.loc),
    meta,
  };
}
