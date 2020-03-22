import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareVariable,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareVariable',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
