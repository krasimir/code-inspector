import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.BooleanTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
