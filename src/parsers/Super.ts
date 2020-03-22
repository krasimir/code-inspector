import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Super,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Super',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
