import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NumberLiteralTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'NumberLiteralTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
