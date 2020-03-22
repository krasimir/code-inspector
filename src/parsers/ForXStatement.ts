import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForXStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ForXStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
