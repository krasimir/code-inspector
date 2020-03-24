import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeParameterDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypeParameterDeclaration',
    text: `<${node.params.map(p => helpers.parse(p).text).join(', ')}>`,
    ...helpers.normalizeLoc(node.loc),
  };
}
