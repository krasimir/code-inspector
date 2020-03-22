import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.EmptyTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
