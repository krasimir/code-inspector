/* eslint-disable global-require */
import * as Traverse from '@babel/traverse';
import { SourceLocation } from '@babel/types';
import { NormalizedNode } from './types';

import Parsers from './parsers';

export function normalizeLoc(loc: SourceLocation) {
  return {
    start: [loc.start.line, loc.start.column + 1],
    end: [loc.end.line, loc.end.column + 1],
  };
}

export function parse(
  node: Traverse.Node | undefined,
  parent: Traverse.Node | null,
  grandParent: Traverse.Node | null
): NormalizedNode {
  if (node && Parsers[node.type]) {
    return Parsers[node.type](
      node,
      { normalizeLoc, parse },
      parent,
      grandParent
    );
  }
  if (node && node.type) {
    return {
      text: node.type,
      type: node.type,
    };
  }
  return {
    text: '',
    type: 'Unknown',
  };
}

export function unknownNormalizedNode(): NormalizedNode {
  return {
    text: 'Unknown',
    type: 'Unknown',
  };
}
