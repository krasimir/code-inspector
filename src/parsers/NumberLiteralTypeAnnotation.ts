import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.NumberLiteralTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
