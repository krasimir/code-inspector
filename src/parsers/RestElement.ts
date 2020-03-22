import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.RestElement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'RestElement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
