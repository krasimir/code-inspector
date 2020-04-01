import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.WithStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'WithStatement',
    text: `with(${helpers.parse(node.object).text}) { ... }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
