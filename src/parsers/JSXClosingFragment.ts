import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXClosingFragment,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXClosingFragment',
    text: 'JSXClosingFragment',
    ...helpers.normalizeLoc(node.loc),
  };
}
