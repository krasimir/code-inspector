import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumStringBody,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumStringBody',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
