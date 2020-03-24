import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.YieldExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'YieldExpression',
    text: `yield ${helpers.parse(node.argument).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
