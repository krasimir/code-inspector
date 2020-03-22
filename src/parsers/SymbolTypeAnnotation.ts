import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SymbolTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'SymbolTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
