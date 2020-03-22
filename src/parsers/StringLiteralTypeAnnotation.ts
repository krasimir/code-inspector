import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.StringLiteralTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'StringLiteralTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
