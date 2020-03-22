import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXElement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXElement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
