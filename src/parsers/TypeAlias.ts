import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeAlias,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TypeAlias',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
