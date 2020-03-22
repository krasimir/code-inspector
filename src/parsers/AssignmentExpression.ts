import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.AssignmentExpression): NormalizedNode | undefined {
  return undefined;
}
