import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSConstructSignatureDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSConstructSignatureDeclaration',
    text: `new (${node.parameters
      .map(
        p =>
          `${helpers.parse(p).text}${
            p.typeAnnotation ? `${helpers.parse(p.typeAnnotation).text}` : ''
          }`
      )
      .join(', ')})${helpers.parse(node.typeAnnotation).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
