import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSQualifiedName,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSQualifiedName',
    text: `${helpers.parse(node.left).text}.${helpers.parse(node.right).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
