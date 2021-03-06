import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclaredPredicate,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclaredPredicate',
    text: 'DeclaredPredicate',
    ...helpers.normalizeLoc(node.loc),
  };
}
