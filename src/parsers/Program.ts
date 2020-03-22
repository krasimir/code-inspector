import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Program,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Program',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
