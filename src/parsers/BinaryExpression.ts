import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.BinaryExpression): NormalizedNode | undefined {
  return undefined;
}
