import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportAllDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ExportAllDeclaration',
    text: `↗ ${helpers.parse(node.source).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
