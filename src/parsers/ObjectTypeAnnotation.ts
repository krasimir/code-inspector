import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
