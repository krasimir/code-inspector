import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeCastExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TypeCastExpression',
    text: 'TypeCastExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}
