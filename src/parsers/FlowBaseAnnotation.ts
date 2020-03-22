import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FlowBaseAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FlowBaseAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
