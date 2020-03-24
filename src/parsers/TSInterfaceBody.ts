import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSInterfaceBody,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSInterfaceBody',
    text: '{…}',
    ...helpers.normalizeLoc(node.loc),
  };
}
