import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FlowBaseAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'FlowBaseAnnotation',
    text: 'FlowBaseAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}
