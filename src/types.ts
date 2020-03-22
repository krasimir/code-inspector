export interface NormalizedNode {
  text: string;
  type: string;
  start?: [number | undefined, number | undefined];
  end?: [number | undefined, number | undefined];
}

export type ParserHelpers = {
  normalizeLoc: Function;
};
