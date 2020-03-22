import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
