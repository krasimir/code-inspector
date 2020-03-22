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

export function parse(node: Traverse.Node): NormalizedNode {
  if (Parsers[node.type]) {
    return Parsers[node.type](node, { normalizeLoc, parse });
  }
  if (node.type) {
    return {
      text: node.type,
      type: node.type,
    };
  }
  return {
    text: 'Unknown',
    type: 'Unknown',
  };
}

export function unknownNormalizedNode(): NormalizedNode {
  return {
    text: 'Unknown',
    type: 'Unknown',
  };
}
