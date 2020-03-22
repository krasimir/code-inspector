import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeParameter,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TypeParameter',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
