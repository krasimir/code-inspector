import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeReference,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeReference',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
