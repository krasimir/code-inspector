import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSRestType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSRestType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
