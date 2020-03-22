import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumNumberMember,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'EnumNumberMember',
    text: 'EnumNumberMember',
    ...helpers.normalizeLoc(node.loc),
  };
}
