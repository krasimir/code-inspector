import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.OpaqueType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'OpaqueType',
    text: 'OpaqueType',
    ...helpers.normalizeLoc(node.loc),
  };
}
