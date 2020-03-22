import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Function,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Function',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
