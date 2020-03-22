import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(node: T.Block, helpers: ParserHelpers): NormalizedNode {
  return {
    type: 'Block',
    text: 'Block',
    ...helpers.normalizeLoc(node.loc),
  };
}
