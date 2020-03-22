import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SpreadProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'SpreadProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
