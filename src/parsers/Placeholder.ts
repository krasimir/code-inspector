import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Placeholder,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Placeholder',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
