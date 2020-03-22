import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSModuleBlock,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSModuleBlock',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
