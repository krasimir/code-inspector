import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSRestType): NormalizedNode | undefined {
  return undefined;
}
