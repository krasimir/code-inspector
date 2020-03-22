import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TryStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TryStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
