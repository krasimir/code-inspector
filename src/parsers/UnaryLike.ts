import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UnaryLike,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'UnaryLike',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
