import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSExpressionWithTypeArguments,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSExpressionWithTypeArguments',
    text: `${helpers.parse(node.expression).text}${
      helpers.parse(node.typeParameters).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
