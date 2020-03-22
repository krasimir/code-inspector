import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DirectiveLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DirectiveLiteral',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
