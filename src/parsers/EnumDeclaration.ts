import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'EnumDeclaration',
    text: 'EnumDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
