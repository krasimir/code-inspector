import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSNamespaceExportDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSNamespaceExportDeclaration',
    text: `↗ as namespace ${helpers.parse(node.id).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
