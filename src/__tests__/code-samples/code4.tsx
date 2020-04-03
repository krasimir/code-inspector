/* eslint-disable @typescript-eslint/no-use-before-define */
// new
import React, { useState, useEffect } from 'react';
import { SVG, Svg } from '@svgdotjs/svg.js';

import { SVGIcon } from './utils/icons';
import { Entity, ItemType } from '../types';

interface GraphItem {
  id: string;
  update: Function;
  expanded: boolean;
  parent: string | undefined;
  svg: Svg;
  children: GraphItem[];
}
interface Graph {
  container: Svg | null;
  items: GraphItem[];
  update: Function;
  entityExists: Function;
  itemPosition(id: string): number;
}

const ROW_HEIGHT = 38;

const getIcon = (type: ItemType): Function =>
  ({
    [ItemType.RIEW]: SVGIcon.Code,
    [ItemType.CHANNEL]: SVGIcon.Activity,
    [ItemType.STATE]: SVGIcon.Database,
    [ItemType.ROUTINE]: SVGIcon.CPU,
    [ItemType.UNRECOGNIZED]: SVGIcon.Octagon,
  }[type] || SVGIcon.Octagon);

function trimText(str: string, n: number): string {
  if (str.length > n) {
    return `${str.substr(0, n)}...`;
  }
  return str;
}

function arrayMove(arr: Array<any>, oldIndex: number, newIndex: number) {
  if (newIndex >= arr.length) {
    let k = newIndex - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
}

function createGraphItem(entity: Entity, parent: string | undefined) {
  // defining the label
  const label = (graph.container as Svg)
    .nested()
    .id(entity.id as string)
    .css('cursor', 'pointer');

  function addMoreIcon(e: Entity) {
    if (!label.findOne(`.${e.id}-more-icon`)) {
      label.svg(
        SVGIcon.MoreHorizontal(
          200 - 30,
          7,
          undefined,
          undefined,
          `${entity.id}-more-icon`
        )
      );
    }
  }
  function decorate() {
    label.line([0, ROW_HEIGHT - 1, 200, ROW_HEIGHT - 1]).stroke({
      width: 1,
      color: '#444',
    });
    label.svg(getIcon(entity.type)(10, 10, 18));
  }
  function setText() {
    label
      .text(entity.name ? trimText(entity.name, 20) : '')
      .font({
        size: '1em',
      })
      .move(33, 10)
      .css('fill', 'white');
  }
  function addBackground() {
    const background = label.rect(200, ROW_HEIGHT).attr({ fill: '#2a2a2a' });
    label.on('mouseover', () => background.attr({ fill: '#242424' }));
    label.on('mouseout', () => background.attr({ fill: '#2a2a2a' }));
  }

  const graphItem: GraphItem = {
    id: entity.id,
    parent,
    expanded: false,
    svg: label,
    update(e: Entity) {
      createGraphItems(e.children, this.id);
    },
  };

  addBackground();
  decorate();
  setText();
  createGraphItems(entity.children, graphItem.id);

  return graphItem;
}
function sortAndPosition() {
  const log: Array<any> = [];
  graph.items.forEach(item => {
    if (item.parent) {
      const itemPosition = graph.itemPosition(item.id);
      const parentPosition = graph.itemPosition(item.parent);
      if (parentPosition >= 0) {
        if (itemPosition < parentPosition) {
          arrayMove(graph.items, itemPosition, parentPosition);
        } else if (itemPosition - parentPosition > 1) {
          log.push(`${item.id} ${itemPosition - parentPosition}`);
        }
      } else {
        console.warn(`Ops. Parent ${item.parent} doesn't exist.`);
      }
    }
  });
  console.clear();
  console.log(graph.items);
  log.forEach(v => console.log(v));
}
function createGraphItems(
  es: Entity[] | undefined,
  parent?: string | undefined
) {
  if (es && es.length > 0) {
    es.forEach(item => {
      const graphItem = graph.entityExists(item);
      if (!graphItem) {
        graph.items.push(createGraphItem(item, parent));
        sortAndPosition();
      } else {
        graphItem.update(item);
      }
    });
  }
}

const graph: Graph = {
  container: null,
  items: [],
  entityExists(entity: Entity): GraphItem | undefined {
    return this.items.find(registeredItem => registeredItem.id === entity.id);
  },
  itemPosition(id: string) {
    return this.items.findIndex(i => i.id === id);
  },
  update: createGraphItems,
};

export default function Graph({ entities }: { entities: Entity[] }) {
  const [g, setGraph] = useState<Graph | null>(null);

  useEffect(() => {
    if (g === null) {
      graph.container = SVG()
        .addTo('#graph')
        .size('100%', '100%');
      createGraphItems(entities);
      setGraph(graph);
    } else {
      g.update(entities);
    }
  }, [entities, g]);
  return <div id="graph" style={{ height: '100%' }}></div>;
}
