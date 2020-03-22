import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ThisTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ThisTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
