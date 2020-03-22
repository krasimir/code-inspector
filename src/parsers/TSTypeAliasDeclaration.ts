import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeAliasDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypeAliasDeclaration',
    text: `${helpers.parse(node.id).text}:${
      helpers.parse(node.typeAnnotation).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
