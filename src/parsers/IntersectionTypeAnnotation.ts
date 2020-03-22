import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.IntersectionTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
