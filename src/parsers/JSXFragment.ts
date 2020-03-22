import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXFragment,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXFragment',
    text: 'JSXFragment',
    ...helpers.normalizeLoc(node.loc),
  };
}
