import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXFragment,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXFragment',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
