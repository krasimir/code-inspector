import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTupleType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTupleType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
