import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSQualifiedName,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSQualifiedName',
    text: 'TSQualifiedName',
    ...helpers.normalizeLoc(node.loc),
  };
}
