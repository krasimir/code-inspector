import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeAssertion,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypeAssertion',
    text: `<${helpers.parse(node.typeAnnotation).text}> ${
      helpers.parse(node.expression).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
