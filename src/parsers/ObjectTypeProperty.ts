import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectTypeProperty,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ObjectTypeProperty',
    text: 'ObjectTypeProperty',
    ...helpers.normalizeLoc(node.loc),
  };
}
