import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.UnaryExpression): NormalizedNode | undefined {
  return undefined;
}
