import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BooleanLiteralTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BooleanLiteralTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
