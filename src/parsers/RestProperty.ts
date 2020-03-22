import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.RestProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'RestProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
