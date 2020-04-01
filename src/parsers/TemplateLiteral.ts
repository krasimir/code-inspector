import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TemplateLiteral,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TemplateLiteral',
    text: '`...`',
    ...helpers.normalizeLoc(node.loc),
  };
}
