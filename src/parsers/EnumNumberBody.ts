import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumNumberBody,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumNumberBody',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
