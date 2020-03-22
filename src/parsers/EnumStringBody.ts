import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumStringBody,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'EnumStringBody',
    text: 'EnumStringBody',
    ...helpers.normalizeLoc(node.loc),
  };
}
