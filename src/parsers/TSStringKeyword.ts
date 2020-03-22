import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSStringKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSStringKeyword',
    text: 'TSStringKeyword',
    ...helpers.normalizeLoc(node.loc),
  };
}
