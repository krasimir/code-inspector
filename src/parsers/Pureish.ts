import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Pureish,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Pureish',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
