import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXNamespacedName,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'JSXNamespacedName',
    text: `<${helpers.parse(node.namespace).text}:${
      helpers.parse(node.name).text
    }>`,
    ...helpers.normalizeLoc(node.loc),
  };
}
