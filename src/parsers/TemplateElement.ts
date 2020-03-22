import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TemplateElement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TemplateElement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
