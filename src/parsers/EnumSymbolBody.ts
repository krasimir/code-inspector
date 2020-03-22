import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumSymbolBody,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumSymbolBody',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
