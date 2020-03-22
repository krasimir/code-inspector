import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.While,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'While',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
