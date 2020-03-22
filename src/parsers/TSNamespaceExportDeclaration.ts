import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSNamespaceExportDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSNamespaceExportDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
