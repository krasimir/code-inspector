// flow
import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareExportAllDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareExportAllDeclaration',
    text: 'DeclareExportAllDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
