import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumBooleanBody,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumBooleanBody',
    text: 'EnumBooleanBody',
    ...helpers.normalizeLoc(node.loc),
  };
}
