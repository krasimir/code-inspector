import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportDefaultSpecifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ImportDefaultSpecifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
