import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumBooleanMember,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'EnumBooleanMember',
    text: 'EnumBooleanMember',
    ...helpers.normalizeLoc(node.loc),
  };
}
