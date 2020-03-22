import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExistsTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExistsTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
