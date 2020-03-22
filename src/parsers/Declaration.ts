import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Declaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Declaration',
    text: 'Declaration',
    ...helpers.normalizeLoc(node.loc),
  };
}
