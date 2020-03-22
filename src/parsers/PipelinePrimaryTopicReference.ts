import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.PipelinePrimaryTopicReference,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'PipelinePrimaryTopicReference',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
