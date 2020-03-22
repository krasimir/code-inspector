import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Literal,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Literal',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
