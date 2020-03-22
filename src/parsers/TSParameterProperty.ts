import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSParameterProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSParameterProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
