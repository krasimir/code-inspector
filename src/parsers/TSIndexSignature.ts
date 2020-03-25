import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSIndexSignature,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSIndexSignature',
    text: `[${helpers.parseItems(node.parameters)}]${
      helpers.parse(node.typeAnnotation).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
