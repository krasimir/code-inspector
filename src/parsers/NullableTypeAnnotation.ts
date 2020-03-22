import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NullableTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'NullableTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
