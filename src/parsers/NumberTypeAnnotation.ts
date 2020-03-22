import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NumberTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'NumberTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
