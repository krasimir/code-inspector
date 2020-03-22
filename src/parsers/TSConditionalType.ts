import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSConditionalType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSConditionalType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
