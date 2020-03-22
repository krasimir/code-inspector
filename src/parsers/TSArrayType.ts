import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSArrayType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSArrayType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
