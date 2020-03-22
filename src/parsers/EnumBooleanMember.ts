import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumBooleanMember,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumBooleanMember',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
