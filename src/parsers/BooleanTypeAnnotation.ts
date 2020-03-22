import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BooleanTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BooleanTypeAnnotation',
    text: 'BooleanTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}
