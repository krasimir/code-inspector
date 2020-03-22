import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSImportEqualsDeclaration): NormalizedNode | undefined {
  return undefined;
}
