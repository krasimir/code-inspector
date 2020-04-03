import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  let funcName = helpers.parse(node.id).text;
  if (funcName === '') {
    funcName = 'ƒ';
  }
  return {
    type: 'FunctionExpression',
    text: `${funcName}${helpers.renderFunctionParameters(node)}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
