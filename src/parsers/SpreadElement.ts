import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SpreadElement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'SpreadElement',
    text: `...${helpers.parse(node.argument).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
