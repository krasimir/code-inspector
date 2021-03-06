import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.CompletionStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'CompletionStatement',
    text: 'CompletionStatement',
    ...helpers.normalizeLoc(node.loc),
  };
}
