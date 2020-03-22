import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXOpeningElement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXOpeningElement',
    text: 'JSXOpeningElement',
    ...helpers.normalizeLoc(node.loc),
  };
}
