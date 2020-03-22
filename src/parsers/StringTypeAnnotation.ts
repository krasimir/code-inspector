import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.StringTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}
