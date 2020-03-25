import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeLiteral,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypeLiteral',
    text: `{${helpers.parseItems(node.members)}}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
