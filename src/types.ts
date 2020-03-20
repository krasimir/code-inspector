export interface ParsersInterface {
  [key: string]: (node: any, parse: Function) => string;
}

export interface BreadcrumbsItem {
  text: string;
  start: [number, number];
  end: [number, number];
}
