import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassPrivateProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ClassPrivateProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
