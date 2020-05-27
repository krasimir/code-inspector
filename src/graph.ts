/* eslint-disable no-param-reassign, @typescript-eslint/no-use-before-define, @typescript-eslint/no-empty-function */
import uniq from "lodash/uniq";
import get from "lodash/get";
import { NormalizedNode, Analysis } from "./types";
import { accessNode } from "./utils";
import { NODES_FUNCTION_SCOPES, NODES_DEFINING_SCOPES } from "./constants";

interface GraphLink {
  source: string;
  target: string;
  type?: string;
}

const SCOPES_TO_ADD: Record<string, boolean> = {
  FunctionDeclaration: true,
  FunctionExpression: true,
  ClassMethod: true,
  ObjectMethod: true,
  ClassDeclaration: true,
};

export default function(
  analysis: Analysis
): { nodes: NormalizedNode[]; links: GraphLink[] } {
  const { nodes, variables, tree } = analysis;
  const getNodeByKey = accessNode(nodes);
  const nodesData: NormalizedNode[] = [];
  const linksData: GraphLink[] = [];

  const dict: Record<string, Function> = {
    ConditionalExpression(node: NormalizedNode) {
      addNodeToGraph(node);
    },
  };

  function addNodeToGraph(node: NormalizedNode) {
    if (!nodesData.find(({ key }) => key === node.key)) {
      nodesData.push(node);
    }
  }
  function linkNodes() {
    for (let i = 0; i < nodesData.length; i++) {
      const node = nodesData[i];
      const scope = node.scopePath.split(".").pop();
      console.log(scope);
    }
  }
  function process(node: NormalizedNode) {
    if (dict[node.type]) {
      dict[node.type](node);
    } else if (SCOPES_TO_ADD[node.type]) {
      addNodeToGraph(node);
    }
    if (node.children) {
      node.children.forEach((c) => {
        process(c);
      });
    }
  }

  process(tree);
  linkNodes();

  return { nodes: nodesData, links: linksData };
}
