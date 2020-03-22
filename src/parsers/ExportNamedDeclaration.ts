import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportNamedDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ExportNamedDeclaration',
    text: 'ExportNamedDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
