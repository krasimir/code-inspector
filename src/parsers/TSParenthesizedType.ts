import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSParenthesizedType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSParenthesizedType',
    text: 'TSParenthesizedType',
    ...helpers.normalizeLoc(node.loc),
  };
}
