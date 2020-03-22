import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForXStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ForXStatement',
    text: 'ForXStatement',
    ...helpers.normalizeLoc(node.loc),
  };
}
