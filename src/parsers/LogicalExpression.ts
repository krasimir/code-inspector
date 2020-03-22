import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.LogicalExpression): NormalizedNode | undefined {
  return undefined;
}
