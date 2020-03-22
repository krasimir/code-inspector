import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ConditionalExpression): NormalizedNode | undefined {
  return undefined;
}
