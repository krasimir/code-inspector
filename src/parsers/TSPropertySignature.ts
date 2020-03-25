import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSPropertySignature,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSPropertySignature',
    text: `${helpers.parse(node.key).text}${
      helpers.parse(node.typeAnnotation).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
