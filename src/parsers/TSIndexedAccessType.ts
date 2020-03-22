import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSIndexedAccessType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSIndexedAccessType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
