import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ClassPrivateProperty): NormalizedNode | undefined {
  return undefined;
}
