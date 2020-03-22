import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Terminatorless,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'Terminatorless',
    text: 'Terminatorless',
    ...helpers.normalizeLoc(node.loc),
  };
}
