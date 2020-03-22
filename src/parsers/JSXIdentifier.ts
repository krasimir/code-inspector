import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXIdentifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXIdentifier',
    text: 'JSXIdentifier',
    ...helpers.normalizeLoc(node.loc),
  };
}
