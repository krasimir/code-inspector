import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportAllDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExportAllDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
