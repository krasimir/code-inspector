export interface NormalizedNode {
  text: string | number | boolean;
  type: string;
  start?: [number | undefined, number | undefined];
  end?: [number | undefined, number | undefined];
  left?: string | number | boolean;
  right?: string | number | boolean;
  nesting?: number;
}

export interface Analysis {
  ast: any;
  nodes: NormalizedNode[];
  scopes: NormalizedNode[];
  variables: NormalizedNode[];
}

// Analyzing the providing code
export function analyze(code: string): Analysis;

// Sort nodes by their starting position
export function sort(nodes: NormalizedNode[]): NormalizedNode[];
