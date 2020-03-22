import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForOfStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ForOfStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
