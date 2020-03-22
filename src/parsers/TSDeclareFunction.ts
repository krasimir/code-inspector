import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSDeclareFunction,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSDeclareFunction',
    text: 'TSDeclareFunction',
    ...helpers.normalizeLoc(node.loc),
  };
}
