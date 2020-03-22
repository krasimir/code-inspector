import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumDefaultedMember,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'EnumDefaultedMember',
    text: 'EnumDefaultedMember',
    ...helpers.normalizeLoc(node.loc),
  };
}
