import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ImportDefaultSpecifier): NormalizedNode | undefined {
  return undefined;
}
