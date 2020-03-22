import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.VoidTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'VoidTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
