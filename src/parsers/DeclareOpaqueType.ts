import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareOpaqueType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareOpaqueType',
    text: 'DeclareOpaqueType',
    ...helpers.normalizeLoc(node.loc),
  };
}
