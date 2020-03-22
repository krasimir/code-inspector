import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.VariableDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'VariableDeclaration',
    text:
      node.declarations && node.declarations.length > 0
        ? helpers.parse(node.declarations[0]).text
        : 'variable',
    ...helpers.normalizeLoc(node.loc),
  };
}
