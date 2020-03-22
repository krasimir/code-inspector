import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.MixedTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'MixedTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
