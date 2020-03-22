import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportSpecifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ImportSpecifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
