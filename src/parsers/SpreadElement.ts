import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SpreadElement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'SpreadElement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
