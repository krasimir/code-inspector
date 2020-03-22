import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Expression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Expression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
