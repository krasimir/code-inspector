import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ParenthesizedExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ParenthesizedExpression',
    text: 'ParenthesizedExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}
