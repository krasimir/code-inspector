import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSEnumMember,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSEnumMember',
    text: 'TSEnumMember',
    ...helpers.normalizeLoc(node.loc),
  };
}
