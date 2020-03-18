export interface ParsersInterface {
  [key: string]: (node: any, parse: Function) => string;
}
