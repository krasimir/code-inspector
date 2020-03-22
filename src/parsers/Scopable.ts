import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Scopable,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Scopable',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
