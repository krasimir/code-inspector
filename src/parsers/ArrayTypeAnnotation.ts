/* Flow */
import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ArrayTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ArrayTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
