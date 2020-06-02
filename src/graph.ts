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

const BRANCHING: Record<string, boolean> = {
  ConditionalExpression: true,
  IfStatement: true,
};

const EXECUTION: Record<string, boolean> = {
  CallExpression: true,
};

function toGraph(
  analysis: Analysis
): { nodes: NormalizedNode[]; links: GraphLink[] } {
  const { nodes, variables, tree } = analysis;
  const nodesData: NormalizedNode[] = [];
  const linksData: GraphLink[] = [];

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
    if (
      SCOPES_TO_ADD[node.type] ||
      BRANCHING[node.type] ||
      EXECUTION[node.type]
    ) {
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

function toMermaidDiagram(analysis: Analysis): string {
  const { nodes, links } = toGraph(analysis);
  const getNodeByKey = accessNode(analysis.nodes);
  const diagram: string[] = [`graph TB`];
  const styles: Record<string, string> = {};

  function addNode(n: NormalizedNode): string {
    let str = n.key;
    if (BRANCHING[n.type]) {
      str += `("${n.text}")`;
      styles[n.key] = "node-branching";
    } else if (EXECUTION[n.type]) {
      str += `("${n.text}")`;
      styles[n.key] = "node-call";
    } else {
      str += `("${n.text}")`;
      styles[n.key] = "node-def";
    }
    return str;
  }
  function addLink(A: NormalizedNode, B: NormalizedNode) {
    diagram.push(`${addNode(A)}-->${addNode(B)}`);
  }

  nodes.forEach((node) => {
    const scopePath = node.scopePath.split(".").reverse();
    let found = false;
    for (let i = 0; i < scopePath.length; i++) {
      const foundScope = nodes.find((n) => n.key === scopePath[i]);
      if (foundScope) {
        addLink(foundScope, node);
        found = true;
        break;
      }
    }
    if (!found) {
      const root = getNodeByKey(scopePath[scopePath.length - 1]);
      if (root && root.type === "Program") {
        addLink(root, node);
      }
    }
  });

  // styles

  return diagram
    .concat(
      Object.keys(styles).map((key) => {
        return `class ${key} ${styles[key]}`;
      })
    )
    .join("\n");
}

const graphAPI = {
  toGraph,
  toMermaidDiagram,
};

export default graphAPI;

/*
graph TB
  A --- B
  B-->C[fa:fa-ban forbidden]
  B-->D(fa:fa-spinner)
  E --- X
*/
