import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ReturnStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ReturnStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
