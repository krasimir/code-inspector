import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.NewExpression): NormalizedNode | undefined {
  return undefined;
}
