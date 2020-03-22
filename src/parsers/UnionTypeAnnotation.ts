import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.UnionTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
