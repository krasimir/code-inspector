/* eslint-disable no-param-reassign, @typescript-eslint/no-use-before-define, @typescript-eslint/no-empty-function */
import uniq from 'lodash/uniq';
import get from 'lodash/get';
import { NormalizedNode, Analysis } from './types';
import { accessNode } from './utils';
import { NODES_FUNCTION_SCOPES, NODES_DEFINING_SCOPES } from './constants';

interface GraphLink {
  source: string;
  target: string;
}

export default function(
  analysis: Analysis
): { nodes: NormalizedNode[]; links: GraphLink[] } {
  const { nodes, variables, tree } = analysis;
  const getNodeByKey = accessNode(nodes);
  const nodesData: NormalizedNode[] = [];
  const linksData: GraphLink[] = [];

  function addNodeToGraph(node: NormalizedNode) {
    const parentScope = node.scopePath.split('.').pop();
    nodesData.push(node);
    if (parentScope !== '') {
      linksData.push({ source: parentScope, target: node.key });
    }
  }

  function process(node: NormalizedNode) {
    addNodeToGraph(node);
    if (node.children) {
      node.children.forEach(c => {
        process(c);
      });
    }
  }

  process(tree);

  return { nodes: nodesData, links: linksData };
}
