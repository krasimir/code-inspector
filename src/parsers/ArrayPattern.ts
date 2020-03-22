import T, { Identifier as IdentifierType } from '@babel/types';
import get from 'lodash/get';

import { NormalizedNode, ParserHelpers } from '../types';
import Identifier from './Identifier';

export default function(
  node: T.ArrayPattern,
  helpers: ParserHelpers
): NormalizedNode | undefined {
  return {
    type: 'ArrayPattern',
    text: `[${node.elements
      .map(el => Identifier(el as IdentifierType, helpers))
      .map(n => n.text)
      .join(', ')}]`,
    ...helpers.normalizeLoc(node.loc),
  };
}
