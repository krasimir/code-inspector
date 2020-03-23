import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXClosingElement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'JSXClosingElement',
    text: `</${helpers.parse(node.name).text}>`,
    ...helpers.normalizeLoc(node.loc),
  };
}
