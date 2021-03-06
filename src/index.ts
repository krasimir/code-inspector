/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import * as parser from "@babel/parser";
import * as Traverse from "@babel/traverse";

import { parse } from "./parse";

import { NormalizedNode, Analysis } from "./types";
import { getNodeKey, getNodePath, accessNode, pathToTypes } from "./utils";
import G from "./graph";
import SortByLocation from "./sort";
import { NODES_FUNCTION_SCOPES, NODES_DEFINING_SCOPES } from "./constants";

const plugins = [
  "jsx",
  "typescript",
  "asyncGenerators",
  "bigInt",
  "classProperties",
  "classPrivateProperties",
  "classPrivateMethods",
  ["decorators", { decoratorsBeforeExport: false }],
  "doExpressions",
  "dynamicImport",
  "exportDefaultFrom",
  "exportNamespaceFrom",
  "functionBind",
  "functionSent",
  "importMeta",
  "logicalAssignment",
  "nullishCoalescingOperator",
  "numericSeparator",
  "objectRestSpread",
  "optionalCatchBinding",
  "optionalChaining",
  "partialApplication",
  ["pipelineOperator", { proposal: "minimal" }],
  "throwExpressions",
  "topLevelAwait",
];
const babelParserOptions = {
  allowImportExportEverywhere: true,
  allowAwaitOutsideFunction: true,
  plugins: plugins as parser.ParserPlugin[],
  decoratorsBeforeExport: true,
};
let cache: Record<string, NormalizedNode> = {};

function toNormalizeNode(
  n: Traverse.NodePath,
  stack: NormalizedNode[]
): NormalizedNode {
  const scopePath = stack.map((item) => item.key).join(".");
  const key = getNodeKey(n.node);

  if (cache[key]) {
    return cache[key];
  }

  const node = parse(
    n.node,
    n.parentPath ? n.parentPath.node : null,
    n.parentPath && n.parentPath.parentPath
      ? n.parentPath.parentPath.node
      : null
  );

  if (node.key) cache[node.key] = node;

  node.scopePath = scopePath;
  node.path = getNodePath(n);
  node.isScope = !!NODES_DEFINING_SCOPES[node.type];

  return node;
}
function addChild(node: NormalizedNode, child: NormalizedNode) {
  if (node && child) {
    if (!node.children) node.children = [];
    node.children.push(child);
  }
}
function addVariable(node: NormalizedNode, variableNodeKey: string) {
  if (node) {
    if (!node.variables) node.variables = [];
    node.variables.push(variableNodeKey);
  }
}
function setChildren(nodes: NormalizedNode[], getNodeByKey: Function) {
  nodes.forEach((node) => addChild(getNodeByKey(node.parent), node));
}
function setVariables(nodes: NormalizedNode[], getNodeByKey: Function) {
  nodes.forEach((node) => {
    const fullPathTypes = pathToTypes(node.path);
    const scopePathTypes = node.scopePath.split(".");
    const parentType = fullPathTypes[fullPathTypes.length - 1];
    const grandParentType = fullPathTypes[fullPathTypes.length - 2];
    const scopeNodeKey = scopePathTypes[scopePathTypes.length - 1];

    if (node.type === "Identifier") {
      if (
        parentType === "VariableDeclarator" &&
        grandParentType === "VariableDeclaration"
      ) {
        const declaration = node.path.split(".").reverse()[1];
        if (declaration) {
          getNodeByKey(declaration).variableIdentifier = node.text;
          addVariable(getNodeByKey(scopeNodeKey), declaration);
        }
      }
    }
    if (node.type === "FunctionDeclaration") {
      if (node.children && node.meta) {
        const functionItself: NormalizedNode = node.children.find(
          (n) => n.type === "Identifier" && n.text === node.meta.funcName
        );
        if (functionItself) {
          node.variableIdentifier = functionItself.text.toString();
        }
        addVariable(getNodeByKey(scopeNodeKey), node.key);
      }
    }
    if (NODES_FUNCTION_SCOPES[node.type]) {
      if (node.meta && node.meta.params) {
        node.meta.params.forEach((key: string) => {
          getNodeByKey(key).variableIdentifier = getNodeByKey(key).text;
          addVariable(node, key);
        });
      }
    }
  });
}
export function analyze(code: string) {
  const ast = parser.parse(code, babelParserOptions);
  const nodes: NormalizedNode[] = [];
  const scopes: NormalizedNode[] = [];
  const stack: NormalizedNode[] = [];
  const consumedNodes: Record<string, boolean> = {};

  cache = {};

  Traverse.default(ast, {
    enter(path: Traverse.NodePath) {
      const node = toNormalizeNode(path, stack);

      if (consumedNodes[node.key]) return;
      consumedNodes[node.key] = true;

      nodes.push(node);

      if (node.isScope) {
        stack.push(node);
        scopes.push(node);
      }
    },
    exit(path: Traverse.NodePath) {
      const node = toNormalizeNode(path, stack);
      if (NODES_DEFINING_SCOPES[node.type]) {
        stack.pop();
      }
    },
  });

  const getNodeByKey = accessNode(nodes);

  setChildren(nodes, getNodeByKey);
  setVariables(nodes, getNodeByKey);

  return {
    ast,
    tree: nodes.find((n) => n.type === "Program"),
    nodes,
    scopes,
    variables: nodes.filter((n) => !!n.variableIdentifier),
  };
}
export function isVariable(node: NormalizedNode): boolean {
  return !!node.variableIdentifier;
}
export const graph = G;
export const sort = SortByLocation;
