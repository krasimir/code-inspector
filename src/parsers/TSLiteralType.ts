import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSLiteralType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSLiteralType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
