import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.IntersectionTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'IntersectionTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
