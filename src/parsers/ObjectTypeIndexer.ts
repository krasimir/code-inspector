import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectTypeIndexer,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ObjectTypeIndexer',
    text: 'ObjectTypeIndexer',
    ...helpers.normalizeLoc(node.loc),
  };
}
