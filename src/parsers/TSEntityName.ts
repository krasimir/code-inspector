import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSEntityName,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSEntityName',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
