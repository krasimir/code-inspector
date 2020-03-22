import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumStringMember,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'EnumStringMember',
    text: 'EnumStringMember',
    ...helpers.normalizeLoc(node.loc),
  };
}
