import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSSymbolKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSSymbolKeyword',
    text: 'symbol',
    ...helpers.normalizeLoc(node.loc),
  };
}
