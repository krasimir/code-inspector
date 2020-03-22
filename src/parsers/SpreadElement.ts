import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SpreadElement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'SpreadElement',
    text: 'SpreadElement',
    ...helpers.normalizeLoc(node.loc),
  };
}
