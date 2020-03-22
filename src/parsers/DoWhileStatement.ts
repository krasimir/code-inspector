import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DoWhileStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DoWhileStatement',
    text: 'do/while',
    ...helpers.normalizeLoc(node.loc),
  };
}
