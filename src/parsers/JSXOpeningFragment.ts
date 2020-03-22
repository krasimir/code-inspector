import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXOpeningFragment,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXOpeningFragment',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
