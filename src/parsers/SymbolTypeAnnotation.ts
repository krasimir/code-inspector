import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.SymbolTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
