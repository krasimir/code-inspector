import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSX,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSX',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
