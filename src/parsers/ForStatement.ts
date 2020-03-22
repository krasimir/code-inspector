import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ForStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
