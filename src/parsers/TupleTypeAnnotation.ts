import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TupleTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
