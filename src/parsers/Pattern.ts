import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Pattern,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Pattern',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
