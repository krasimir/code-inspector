import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportNamespaceSpecifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ImportNamespaceSpecifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}
