import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.NullableTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
