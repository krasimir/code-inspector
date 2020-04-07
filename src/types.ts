export interface NormalizedNode {
  text: string | number | boolean;
  type: string;
  key?: string;
  start?: [number | undefined, number | undefined];
  end?: [number | undefined, number | undefined];
  left?: string | number | boolean;
  right?: string | number | boolean;
  nesting?: number;
}

export type ParserHelpers = {
  normalizeLoc: Function;
  parse: Function;
  parseFunctionParameters: Function;
  renderFunctionParameters: Function;
  parseItems: Function;
};

export interface Analysis {
  ast: any;
  nodes: NormalizedNode[];
  scopes: NormalizedNode[];
  variables: NormalizedNode[];
}
