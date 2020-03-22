import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareExportAllDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareExportAllDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
