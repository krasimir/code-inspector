import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeParameterDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSTypeParameterDeclaration',
    text: 'TSTypeParameterDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
