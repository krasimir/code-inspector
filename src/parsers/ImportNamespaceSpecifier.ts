import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ImportNamespaceSpecifier): NormalizedNode | undefined {
  return undefined;
}
