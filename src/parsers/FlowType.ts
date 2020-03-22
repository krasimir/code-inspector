import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FlowType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FlowType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
