import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.BigIntLiteral): NormalizedNode | undefined {
  return undefined;
}
