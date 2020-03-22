import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectMethod,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectMethod',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
