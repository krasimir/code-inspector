import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSCallSignatureDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSCallSignatureDeclaration',
    text: 'TSCallSignatureDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
