import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectTypeProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectTypeProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
