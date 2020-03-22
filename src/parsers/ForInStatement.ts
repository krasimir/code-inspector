import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ForInStatement): NormalizedNode | undefined {
  return undefined;
}
