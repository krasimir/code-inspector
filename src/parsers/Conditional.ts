import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Conditional,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Conditional',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
