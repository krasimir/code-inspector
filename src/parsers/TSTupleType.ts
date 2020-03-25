import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTupleType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTupleType',
    text: `[${helpers.parseItems(node.elementTypes)}]`,
    ...helpers.normalizeLoc(node.loc),
  };
}
