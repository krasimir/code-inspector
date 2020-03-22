import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.QualifiedTypeIdentifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'QualifiedTypeIdentifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
