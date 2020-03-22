import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Declaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Declaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
