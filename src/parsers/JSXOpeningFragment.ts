import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXOpeningFragment,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXOpeningFragment',
    text: 'JSXOpeningFragment',
    ...helpers.normalizeLoc(node.loc),
  };
}
