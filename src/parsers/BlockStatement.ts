import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BlockStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BlockStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
