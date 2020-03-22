import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BreakStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BreakStatement',
    text: 'break',
    ...helpers.normalizeLoc(node.loc),
  };
}
