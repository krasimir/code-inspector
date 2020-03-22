import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.WhileStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'WhileStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
