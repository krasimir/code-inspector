import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'FunctionExpression',
    text: 'FunctionExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}
