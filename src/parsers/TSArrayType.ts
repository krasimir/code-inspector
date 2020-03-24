import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSArrayType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSArrayType',
    text: `${helpers.parse(node.elementType).text}[]`,
    ...helpers.normalizeLoc(node.loc),
  };
}
