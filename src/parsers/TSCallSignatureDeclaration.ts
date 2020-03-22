import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSCallSignatureDeclaration): NormalizedNode | undefined {
  return undefined;
}
