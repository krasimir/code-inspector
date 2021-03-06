import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BlockParent,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BlockParent',
    text: 'BlockParent',
    ...helpers.normalizeLoc(node.loc),
  };
}
