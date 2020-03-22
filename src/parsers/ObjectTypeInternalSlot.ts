import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectTypeInternalSlot,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ObjectTypeInternalSlot',
    text: 'ObjectTypeInternalSlot',
    ...helpers.normalizeLoc(node.loc),
  };
}
