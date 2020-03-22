import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.AssignmentPattern): NormalizedNode | undefined {
  return undefined;
}
