import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSUnionType): NormalizedNode | undefined {
  return undefined;
}
