import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXNamespacedName,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXNamespacedName',
    text: 'JSXNamespacedName',
    ...helpers.normalizeLoc(node.loc),
  };
}
