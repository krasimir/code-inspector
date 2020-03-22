import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumStringMember,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumStringMember',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
