import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectTypeSpreadProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectTypeSpreadProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
