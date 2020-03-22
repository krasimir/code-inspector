import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportNamespaceSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ExportNamespaceSpecifier',
    text: 'ExportNamespaceSpecifier',
    ...helpers.normalizeLoc(node.loc),
  };
}
