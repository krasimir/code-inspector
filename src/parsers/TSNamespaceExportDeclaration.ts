import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSNamespaceExportDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSNamespaceExportDeclaration',
    text: 'TSNamespaceExportDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
