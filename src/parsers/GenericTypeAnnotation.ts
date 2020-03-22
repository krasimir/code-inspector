import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.GenericTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'GenericTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
