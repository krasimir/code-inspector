import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassMethod,
  helpers: ParserHelpers,
  parent: T.Node | null,
  grandParent: T.Node | null
): NormalizedNode {
  return {
    type: 'ClassMethod',
    text: `${grandParent ? `${helpers.parse(grandParent).text}.` : ''}${
      helpers.parse(node.key).text
    }${helpers.renderFunctionParameters(node)}`,
    ...helpers.normalizeLoc(node.loc),
    meta: {
      funcName: helpers.parse(node.key).text,
      params: node.params.map(p => helpers.parse(p)),
    },
  };
}
