import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ExportAllDeclaration): NormalizedNode | undefined {
  return undefined;
}
