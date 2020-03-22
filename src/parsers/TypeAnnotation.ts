import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
