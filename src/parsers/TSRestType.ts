import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSRestType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSRestType',
    text: 'TSRestType',
    ...helpers.normalizeLoc(node.loc),
  };
}
