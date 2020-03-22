import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareExportDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareExportDeclaration',
    text: 'DeclareExportDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
