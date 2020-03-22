import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXText,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXText',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
