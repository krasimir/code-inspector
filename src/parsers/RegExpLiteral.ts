import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.RegExpLiteral,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'RegExpLiteral',
    text: `/${node.pattern}/${node.flags}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
