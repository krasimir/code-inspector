import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSInterfaceBody,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSInterfaceBody',
    text: 'TSInterfaceBody',
    ...helpers.normalizeLoc(node.loc),
  };
}
