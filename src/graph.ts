/* eslint-disable no-param-reassign, @typescript-eslint/no-use-before-define, @typescript-eslint/no-empty-function */
import uniq from 'lodash/uniq';
import get from 'lodash/get';
import { NormalizedNode, Analysis } from './types';
import { accessNode } from './utils';
import { NODES_FUNCTION_SCOPES, NODES_DEFINING_SCOPES } from './constants';

interface GraphLink {
  source: string;
  target: string;
  type?: string;
}

export default function(
  analysis: Analysis
): { nodes: NormalizedNode[]; links: GraphLink[] } {
  const { nodes, variables, tree } = analysis;
  const getNodeByKey = accessNode(nodes);
  const nodesData: NormalizedNode[] = [];
  const linksData: GraphLink[] = [];

  function verifyLinking(source: string, target: string) {
    [source, target].forEach(key => {
      const isNodeAddedToTheGraph = !!nodesData.find(n => n.key === key);
      if (!isNodeAddedToTheGraph) {
        addNodeToGraph(getNodeByKey(key));
      }
    });
  }
  function addLink(s: string, t: string, type?: string) {
    const linkExist = linksData.find(
      ({ source, target }) =>
        (source === s && target === t) || (source === t && target === s)
    );
    if (!linkExist) {
      const link = { source: s, target: t };
      if (type) {
        link.type = type;
      }
      linksData.push(link);
      verifyLinking(s, t);
    }
  }
  function addNodeToGraph(node: NormalizedNode) {
    if (!nodesData.find(({ key }) => key === node.key)) {
      nodesData.push(node);
    }
  }

  const dict: Record<string, Function> = {};

  function process(node: NormalizedNode) {
    if (dict[node.type]) dict[node.type](node);
    if (node.children) {
      node.children.forEach(c => {
        process(c);
      });
    }
  }

  process(tree);

  return { nodes: nodesData, links: linksData };
}
