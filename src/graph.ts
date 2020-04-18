/* eslint-disable no-param-reassign, @typescript-eslint/no-use-before-define, @typescript-eslint/no-empty-function */
import uniq from 'lodash/uniq';
import get from 'lodash/get';
import { NormalizedNode, Analysis } from './types';
import { accessNode } from './utils';
import { NODES_FUNCTION_SCOPES, NODES_DEFINING_SCOPES } from './constants';

interface GraphNode {
  id: string;
  text: string;
  scope?: string;
  scopeDepth?: number;
}
interface GraphLink {
  source: string;
  target: string;
}

export default function(
  analysis: Analysis
): { nodes: GraphNode[]; links: GraphLink[] } {
  const { nodes, variables, tree } = analysis;
  const getNodeByKey = accessNode(nodes);
  const nodesData: GraphNode[] = [];
  const linksData: GraphLink[] = [];
  const dict: Record<string, Function> = {};

  function process(node: NormalizedNode) {
    const scopes = node.scopePath.split('.');
    const graphNode: GraphNode = {
      id: node.key,
      text: String(node.text),
      scope: scopes[scopes.length - 1],
      scopeDepth: node.scopePath === '' ? 0 : scopes.length,
    };
    nodesData.push(graphNode);
    if (node.parent) {
      linksData.push({ source: node.parent, target: node.key });
    }
    if (node.children) {
      node.children.forEach(c => {
        if (dict[c.type]) {
          dict[c.type](c, parent || node);
        } else {
          process(c);
        }
      });
    }
  }

  process(tree);

  return { nodes: nodesData, links: linksData };
}
