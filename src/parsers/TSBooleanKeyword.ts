import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSBooleanKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSBooleanKeyword',
    text: 'boolean',
    ...helpers.normalizeLoc(node.loc),
  };
}
