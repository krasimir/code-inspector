import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeParameter,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeParameter',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
