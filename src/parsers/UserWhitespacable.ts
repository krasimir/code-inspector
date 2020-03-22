import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UserWhitespacable,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'UserWhitespacable',
    text: 'UserWhitespacable',
    ...helpers.normalizeLoc(node.loc),
  };
}
