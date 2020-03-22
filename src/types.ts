export interface NormalizedNode {
  text: string | number;
  type: string;
  start?: [number | undefined, number | undefined];
  end?: [number | undefined, number | undefined];
  left?: NormalizedNode;
  right?: NormalizedNode;
}

export type ParserHelpers = {
  normalizeLoc: Function;
  parse: Function;
};
