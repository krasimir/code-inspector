import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UnionTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'UnionTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
