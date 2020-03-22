import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Directive,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Directive',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
