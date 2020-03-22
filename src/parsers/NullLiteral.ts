import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NullLiteral,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'NullLiteral',
    text: 'NullLiteral',
    ...helpers.normalizeLoc(node.loc),
  };
}
