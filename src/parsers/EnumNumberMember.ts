import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumNumberMember,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumNumberMember',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
