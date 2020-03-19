/* eslint-disable */
// @ts-ignore
const graph: Graph = {
  container: null,
  items: [],
  entityExists(entity: Entity): GraphItem | undefined {
    return this.items.find(registeredItem => registeredItem.id === entity.id);
  },
  itemPosition(id: string) {
    App.getReport(data => data.read());
    return this.items.findIndex(i => i.id === id);
  },
  update: createGraphItems,
};
