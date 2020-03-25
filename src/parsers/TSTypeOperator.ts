import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeOperator,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypeOperator',
    text: `${node.operator} ${helpers.parse(node.typeAnnotation).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
