import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumMember,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumMember',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
