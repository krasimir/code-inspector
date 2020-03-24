import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSBigIntKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSBigIntKeyword',
    text: 'bigint',
    ...helpers.normalizeLoc(node.loc),
  };
}
