import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TemplateElement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TemplateElement',
    text: node.value.raw,
    ...helpers.normalizeLoc(node.loc),
  };
}
