import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumDefaultedMember,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumDefaultedMember',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
