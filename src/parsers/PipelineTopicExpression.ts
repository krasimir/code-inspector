import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.PipelineTopicExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'PipelineTopicExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
