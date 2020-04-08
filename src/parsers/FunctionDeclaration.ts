import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  const funcName = helpers.parse(node.id).text;
  return {
    type: 'FunctionDeclaration',
    text: `${funcName}${helpers.renderFunctionParameters(node)}`,
    ...helpers.normalizeLoc(node.loc),
    meta: funcName,
  };
}
