import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareInterface,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareInterface',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
