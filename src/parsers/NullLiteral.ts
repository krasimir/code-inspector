import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NullLiteral,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'NullLiteral',
    text: 'null',
    ...helpers.normalizeLoc(node.loc),
  };
}
