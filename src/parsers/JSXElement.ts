import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXElement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'JSXElement',
    text: `${helpers.parse(node.openingElement).text}…${
      node.closingElement ? helpers.parse(node.closingElement).text : ''
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
