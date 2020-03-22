import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeElement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeElement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
