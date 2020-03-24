import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSDeclareFunction,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSDeclareFunction',
    text: `declare ${helpers.parse(node.id).text}(${node.params
      .map(
        p =>
          `${helpers.parse(p).text}${
            p.typeAnnotation ? `${helpers.parse(p.typeAnnotation).text}` : ''
          }`
      )
      .join(', ')})${helpers.parse(node.returnType).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
