import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ModuleSpecifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ModuleSpecifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
