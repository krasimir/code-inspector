import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSMethodSignature,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSMethodSignature',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
