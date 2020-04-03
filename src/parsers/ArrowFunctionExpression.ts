import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ArrowFunctionExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  if (parent && parent.type === 'CallExpression') {
    return {
      type: 'ArrowFunctionExpression',
      text: `${helpers.parse(parent).text} callback`,
      ...helpers.normalizeLoc(node.loc),
    };
  }
  if (parent && parent.type === 'NewExpression') {
    return {
      type: 'ArrowFunctionExpression',
      text: `new ${helpers.parse(parent.callee).text}(…) argument`,
      ...helpers.normalizeLoc(node.loc),
    };
  }
  if (parent && parent.type === 'VariableDeclarator') {
    return {
      type: 'ArrowFunctionExpression',
      text: `${helpers.parse(parent).text}${helpers.renderFunctionParameters(
        node
      )}`,
      ...helpers.normalizeLoc(node.loc),
    };
  }
  return {
    type: 'ArrowFunctionExpression',
    text: 'ƒ',
    ...helpers.normalizeLoc(node.loc),
  };
}
