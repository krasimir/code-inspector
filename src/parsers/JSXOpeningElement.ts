import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXOpeningElement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXOpeningElement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
