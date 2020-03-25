import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSMappedType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSMappedType',
    text: `{ [${helpers.parse(node.typeParameter).text}]:${
      helpers.parse(node.typeAnnotation).text
    } }`,
    ...helpers.normalizeLoc(node.loc),
  };
}
