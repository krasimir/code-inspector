import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ExportNamespaceSpecifier): NormalizedNode | undefined {
  return undefined;
}
