import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportNamedDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ExportNamedDeclaration',
    text: helpers.parse(node.declaration).text,
    ...helpers.normalizeLoc(node.loc),
  };
}
