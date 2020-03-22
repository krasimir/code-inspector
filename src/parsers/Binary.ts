import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Binary,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Binary',
    text: 'Binary',
    ...helpers.normalizeLoc(node.loc),
  };
}
