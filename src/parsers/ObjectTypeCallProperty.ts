import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectTypeCallProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectTypeCallProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
