import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSInferType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSInferType',
    text: `infer ${helpers.parse(node.typeParameter).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}
