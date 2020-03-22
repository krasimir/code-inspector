import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeQuery,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSTypeQuery',
    text: 'TSTypeQuery',
    ...helpers.normalizeLoc(node.loc),
  };
}
