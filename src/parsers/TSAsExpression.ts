import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSAsExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSAsExpression',
    text: `${helpers.parse(node.expression).text} as ${
      helpers.parse(node.typeAnnotation).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
