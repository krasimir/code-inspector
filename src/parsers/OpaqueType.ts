import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.OpaqueType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'OpaqueType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
