import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSMethodSignature,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSMethodSignature',
    text: `${helpers.parse(node.key).text}(${helpers.parseItems(
      node.parameters
    )})${helpers.parse(node.typeAnnotation).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
