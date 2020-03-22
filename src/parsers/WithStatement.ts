import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.WithStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'WithStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
