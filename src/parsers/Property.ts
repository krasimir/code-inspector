import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Property,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Property',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
