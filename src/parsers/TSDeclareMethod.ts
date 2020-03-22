import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSDeclareMethod,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSDeclareMethod',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
