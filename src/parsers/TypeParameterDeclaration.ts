import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeParameterDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TypeParameterDeclaration',
    text: 'TypeParameterDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
