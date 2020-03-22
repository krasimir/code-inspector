import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeAssertion,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeAssertion',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
