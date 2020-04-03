/* eslint-disable global-require, @typescript-eslint/no-use-before-define */
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

function parseFunctionParameters(params: any[]): string {
  if (params.length > 0) {
    return `…${params.length}`;
  }
  return '';
}

function renderFunctionParameters(
  node: any,
  parent: Traverse.Node,
  grandParent: Traverse.Node,
  delimiter = ','
): string {
  if (node.params && node.params.length > 0) {
    return `<${parseItems(node.params, parent, grandParent, delimiter)}>`;
  }
  return '';
}

function parseItems(
  items: any[],
  parent: Traverse.Node,
  grandParent: Traverse.Node,
  delimiter = ','
): string {
  if (items.length > 0) {
    return items
      .map(i => parse(i, parent, grandParent).text)
      .join(`${delimiter} `);
  }
  return '';
}

export function parse(
  node: Traverse.Node | undefined,
  parent: Traverse.Node | null,
  grandParent: Traverse.Node | null
): NormalizedNode {
  if (node && Parsers[node.type]) {
    return Parsers[node.type](
      node,
      {
        normalizeLoc,
        parse,
        parseFunctionParameters,
        parseItems,
        renderFunctionParameters,
      },
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
