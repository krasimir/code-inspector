import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.NumericLiteral): NormalizedNode | undefined {
  return undefined;
}
