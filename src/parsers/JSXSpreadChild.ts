import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXSpreadChild,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXSpreadChild',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
