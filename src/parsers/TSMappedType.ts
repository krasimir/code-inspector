import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSMappedType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSMappedType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
