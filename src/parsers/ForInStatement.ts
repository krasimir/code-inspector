import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForInStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ForInStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
