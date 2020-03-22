import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NullLiteralTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'NullLiteralTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
