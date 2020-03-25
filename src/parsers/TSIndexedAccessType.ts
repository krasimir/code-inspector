import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSIndexedAccessType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSIndexedAccessType',
    text: `${helpers.parse(node.objectType).text}[${
      helpers.parse(node.indexType).text
    }]`,
    ...helpers.normalizeLoc(node.loc),
  };
}
