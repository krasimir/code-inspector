// source https://www.d3-graph-gallery.com/graph/arc_vertical.html

// set the dimensions and margins of the graph
const margin = 40;
const height = window.innerHeight - margin * 2;
const colors = {
  lineColor: '#ddd',
  lineHighlightColor: '#000',
};

// utils
const getIndent = d => {
  const scopeDepth = d.scopePath.split('.').length;
  return (scopeDepth - 1) * 20;
};
const keyToCSSSelector = key => key.replace(/:/g, '_');
const linkToCSSSelector = d =>
  `${keyToCSSSelector(d.source)}--${keyToCSSSelector(d.target)}`;

// append the svg object to the body of the page
const svg = d3
  .select('#diagram')
  .append('svg')
  .attr('width', window.innerWidth)
  .attr('height', window.innerHeight)
  .append('g')
  .style('transform', `translate(${margin}px,${margin}px)`);

// Read dummy data
d3.json('d3Data.json', function(data) {
  // List of node names
  const allNodes = data.nodes.map(function(d) {
    return d.key;
  });

  // A linear scale to position the nodes on the X axis
  const y = d3
    .scalePoint()
    .range([0, height])
    .domain(allNodes);

  // And give them a label
  const labelWidths = [];
  const n = svg
    .selectAll('mylabels')
    .data(data.nodes)
    .enter();

  const nodes = Nodes.getGraphic(n).style('transform', function(d) {
    const x = getIndent(d);
    const width =
      d3
        .select(this)
        .node()
        .getBBox().width + 10;
    labelWidths.push(x + width);
    return `translate(${x}px, ${y(d.key) + 4}px)`;
  });
  const graphXStartingPoint = Math.max(...labelWidths);

  nodes
    .each(function(d) {
      const node = d3.select(this);
      node.style('opacity', 0.7);

      // expanding the rect to the full length
      const rect = node.select('rect');
      rect.attr('width', graphXStartingPoint - getIndent(d));

      // mouse events
      node
        .on('mouseover', () => {
          d3.select(this).style('opacity', 1);
          data.links.forEach(link => {
            if (link.source === d.key || link.target === d.key) {
              d3.select(`.${linkToCSSSelector(link)}`).style(
                'stroke',
                colors.lineHighlightColor
              );
            }
          });
        })
        .on('mouseout', () => {
          d3.select(this).style('opacity', 0.8);
          data.links.forEach(link => {
            d3.select(`.${linkToCSSSelector(link)}`).style(
              'stroke',
              colors.lineColor
            );
          });
        });
    })
    .sort((a, b) => {
      if (a.path.split('.').length < b.path.split('.').length) return 1;
      return -1;
    });

  // Add links between nodes. Here is the tricky part.
  // In my input data, links are provided between nodes -id-, NOT between node names.
  // So I have to do a link between this id and the name
  const idToNode = {};
  data.nodes.forEach(function(no) {
    idToNode[no.key] = no;
  });
  // Cool, now if I do idToNode["2"].name I've got the name of the node with id 2

  // Add the links
  svg
    .selectAll('mylinks')
    .data(data.links)
    .enter()
    .append('path')
    .attr('d', function(d) {
      if (!idToNode[d.source]) {
        throw new Error(`There is no ${d.source} node in the data.`);
      }
      const start = y(idToNode[d.source].key); // X position of start node on the X axis
      const end = y(idToNode[d.target].key); // X position of end node
      return [
        'M',
        graphXStartingPoint,
        start, // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
        'A', // This means we're gonna build an elliptical arc
        ((start - end) / 2) * 4,
        ',', // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
        (start - end) / (0.9 + (Math.random() * (0.5 - 0.1) + 0.1)),
        0,
        0,
        ',',
        start < end ? 1 : 0,
        graphXStartingPoint,
        ',',
        end,
      ] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
        .join(' ');
    })
    .style('fill', 'none')
    .style('stroke', colors.lineColor)
    .attr('class', d => `line ${linkToCSSSelector(d)}`);
});
