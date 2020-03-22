import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeofTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TypeofTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
