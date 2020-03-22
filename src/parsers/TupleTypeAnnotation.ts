import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TupleTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TupleTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
