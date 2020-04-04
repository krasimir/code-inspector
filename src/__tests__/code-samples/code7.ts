function parseItems(
  items: any[],
  parent: Traverse.Node,
  grandParent: Traverse.Node,
  delimiter = ','
): string {
  if (items.length > 0) {
    return items
      .map(i => parse(i, parent, grandParent).text)
      .join(`${delimiter} `);
  }
  return '';
}
