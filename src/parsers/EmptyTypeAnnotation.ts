// flow
import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EmptyTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EmptyTypeAnnotation',
    text: 'EmptyTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}
