import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSConditionalType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSConditionalType',
    text: 'TSConditionalType',
    ...helpers.normalizeLoc(node.loc),
  };
}
