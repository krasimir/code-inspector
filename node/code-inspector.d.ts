export interface NormalizedNode {
  text: string | number | boolean;
  type: string;
  parent?: string;
  start?: [number | undefined, number | undefined];
  end?: [number | undefined, number | undefined];
  left?: string | number | boolean;
  right?: string | number | boolean;
  nesting?: number;
  meta?: any;
  path?: string;
  scopePath?: string;
}

export interface Analysis {
  ast: any;
  nodes: NormalizedNode[];
  scopes: NormalizedNode[];
  variables: NormalizedNode[];
  tree: TreeItem;
}

export interface TreeItem {
  scope: boolean;
  node: NormalizedNode;
  children: TreeItem[];
}

export function analyze(code: string): Analysis;
export function sort(nodes: NormalizedNode[]): NormalizedNode[];
export function isVariable(node: NormalizedNode): boolean;
