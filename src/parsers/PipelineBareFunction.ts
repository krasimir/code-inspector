import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.PipelineBareFunction,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'PipelineBareFunction',
    text: 'PipelineBareFunction',
    ...helpers.normalizeLoc(node.loc),
  };
}
