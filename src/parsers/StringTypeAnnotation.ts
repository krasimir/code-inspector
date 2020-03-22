import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.StringTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'StringTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
