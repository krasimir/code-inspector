export interface BreadcrumbsNodesParser {
  [key: string]: {
    parse(node: any): string;
  };
}
