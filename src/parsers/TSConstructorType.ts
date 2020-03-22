import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSConstructorType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSConstructorType',
    text: 'TSConstructorType',
    ...helpers.normalizeLoc(node.loc),
  };
}
