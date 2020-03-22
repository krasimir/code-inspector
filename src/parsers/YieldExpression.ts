import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.YieldExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'YieldExpression',
    text: 'YieldExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}
