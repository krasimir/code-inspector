import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
