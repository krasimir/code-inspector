import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectPattern,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectPattern',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
