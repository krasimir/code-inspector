import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.PipelineBareFunction,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'PipelineBareFunction',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
