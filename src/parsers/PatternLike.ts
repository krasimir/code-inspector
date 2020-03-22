import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.PatternLike,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'PatternLike',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
