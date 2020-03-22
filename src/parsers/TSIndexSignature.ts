import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSIndexSignature,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSIndexSignature',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
