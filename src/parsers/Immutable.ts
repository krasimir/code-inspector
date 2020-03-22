import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Immutable,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Immutable',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
