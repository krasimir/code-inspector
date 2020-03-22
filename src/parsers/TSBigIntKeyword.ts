import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSBigIntKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSBigIntKeyword',
    text: 'TSBigIntKeyword',
    ...helpers.normalizeLoc(node.loc),
  };
}
