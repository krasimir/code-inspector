import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportNamespaceSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ExportNamespaceSpecifier',
    text: `↗ ${helpers.parse(node.exported).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
