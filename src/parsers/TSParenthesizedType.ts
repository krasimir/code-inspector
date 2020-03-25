import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSParenthesizedType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSParenthesizedType',
    text: `(${helpers.parse(node.typeAnnotation).text})`,
    ...helpers.normalizeLoc(node.loc),
  };
}
