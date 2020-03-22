import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Import,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Import',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
