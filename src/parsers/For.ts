import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.For,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'For',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
