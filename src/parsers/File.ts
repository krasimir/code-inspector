import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.File,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'File',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
