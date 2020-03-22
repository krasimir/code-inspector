import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXNamespacedName,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXNamespacedName',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
