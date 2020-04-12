import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectMethod,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ObjectMethod',
    text: `${helpers.parse(node.key).text}(${
      node.params.length > 0 ? `…${node.params.length}` : ''
    })`,
    ...helpers.normalizeLoc(node.loc),
    meta: {
      funcName: helpers.parse(node.key).text,
      params: node.params.map(p => helpers.parse(p)),
    },
  };
}
