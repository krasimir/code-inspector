import T from '@babel/types';
import * as Traverse from '@babel/traverse';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassBody,
  helpers: ParserHelpers,
  parent: Traverse.Node
): NormalizedNode {
  let text = '⊏…⊐';
  if (parent && parent.type === 'ClassDeclaration') {
    text = `⊏${helpers.parse(parent).text}⊐`;
  }
  return {
    type: 'ClassBody',
    text,
    ...helpers.normalizeLoc(node.loc),
  };
}
