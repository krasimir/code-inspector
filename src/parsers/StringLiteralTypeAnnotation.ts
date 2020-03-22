import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.StringLiteralTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
