import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectMethod,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ObjectMethod',
    text: 'ObjectMethod',
    ...helpers.normalizeLoc(node.loc),
  };
}
