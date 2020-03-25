import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypePredicate,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypePredicate',
    text: `${helpers.parse(node.parameterName).text} is ${
      helpers.parse(node.typeAnnotation).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
