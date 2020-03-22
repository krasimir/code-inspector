import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSAnyKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSAnyKeyword',
    text: 'TSAnyKeyword',
    ...helpers.normalizeLoc(node.loc),
  };
}
