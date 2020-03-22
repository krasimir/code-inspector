import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.MetaProperty,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'MetaProperty',
    text: 'MetaProperty',
    ...helpers.normalizeLoc(node.loc),
  };
}
