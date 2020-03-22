import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ImportDeclaration',
    text: 'ImportDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
