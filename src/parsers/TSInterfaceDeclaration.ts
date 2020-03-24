import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSInterfaceDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSInterfaceDeclaration',
    text: `interface ${helpers.parse(node.id).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
