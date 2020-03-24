import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSEnumDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSEnumDeclaration',
    text: `enum ${helpers.parse(node.id).text} {${helpers.parseItems(
      node.members
    )}}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
