import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.UpdateExpression): NormalizedNode | undefined {
  return undefined;
}
