import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ImportDeclaration',
    text: `${node.specifiers.map(s => helpers.parse(s).text).join(', ')} ⤺ ${
      helpers.parse(node.source).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
