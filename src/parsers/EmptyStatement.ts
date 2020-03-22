import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EmptyStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EmptyStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
