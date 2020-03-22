import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ForStatement',
    text: 'for',
    ...helpers.normalizeLoc(node.loc),
  };
}
