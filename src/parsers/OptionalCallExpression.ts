import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.OptionalCallExpression): NormalizedNode | undefined {
  return undefined;
}
