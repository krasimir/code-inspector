import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SwitchCase,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'SwitchCase',
    text: `case ${helpers.parse(node.test).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
