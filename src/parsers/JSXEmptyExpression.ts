import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.JSXEmptyExpression): NormalizedNode | undefined {
  return undefined;
}
