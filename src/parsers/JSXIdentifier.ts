import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXIdentifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXIdentifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
