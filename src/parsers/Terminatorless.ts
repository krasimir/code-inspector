import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Terminatorless,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Terminatorless',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
