import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSIntersectionType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSIntersectionType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
