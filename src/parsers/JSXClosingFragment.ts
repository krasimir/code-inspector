import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXClosingFragment,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXClosingFragment',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
