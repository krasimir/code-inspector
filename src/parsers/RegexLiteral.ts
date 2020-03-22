import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.RegexLiteral,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'RegexLiteral',
    text: 'RegexLiteral',
    ...helpers.normalizeLoc(node.loc),
  };
}
