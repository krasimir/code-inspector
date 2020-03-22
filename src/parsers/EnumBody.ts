import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumBody,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumBody',
    text: 'EnumBody',
    ...helpers.normalizeLoc(node.loc),
  };
}
