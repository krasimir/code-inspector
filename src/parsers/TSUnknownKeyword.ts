import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSUnknownKeyword): NormalizedNode | undefined {
  return undefined;
}
