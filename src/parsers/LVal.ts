import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.LVal,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'LVal',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
