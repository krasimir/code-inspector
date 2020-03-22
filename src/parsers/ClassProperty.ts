import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ClassProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
