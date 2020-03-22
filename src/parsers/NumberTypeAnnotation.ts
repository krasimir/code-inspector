import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.NumberTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
