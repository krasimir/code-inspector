import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXOpeningElement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'JSXOpeningElement',
    text: `<${helpers.parse(node.name).text}${
      node.attributes.length > 0 ? `…${node.attributes.length}` : ''
    }${node.selfClosing ? '/>' : '>'}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
