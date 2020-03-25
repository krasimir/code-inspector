import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSRestType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSRestType',
    text: `...${helpers.parse(node.typeAnnotation).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
