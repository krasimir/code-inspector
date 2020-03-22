import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ContinueStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ContinueStatement',
    text: 'continue',
    ...helpers.normalizeLoc(node.loc),
  };
}
