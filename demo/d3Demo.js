// set the dimensions and margins of the graph
const margin = { top: 20, right: 20, bottom: 20, left: 20 };
const height = window.innerHeight - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3
  .select('#diagram')
  .append('svg')
  .attr('width', window.innerWidth)
  .attr('height', window.innerHeight)
  .append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

// Read dummy data
d3.json('d3Data.json', function(data) {
  // List of node names
  const allNodes = data.nodes.map(function(d) {
    return d.text;
  });

  // A linear scale to position the nodes on the X axis
  const y = d3
    .scalePoint()
    .range([0, height])
    .domain(allNodes);

  // And give them a label
  const labelWidths = [];
  svg
    .selectAll('mylabels')
    .data(data.nodes)
    .enter()
    .append('text')
    .attr('x', 0)
    .attr('y', function(d) {
      return y(d.text) + 4;
    })
    .text(function(d) {
      return d.text;
    })
    .each(function(d) {
      labelWidths.push(
        d3
          .select(this)
          .node()
          .getBBox().width + 4
      );
    });
  const graphXStartingPoint = Math.max(...labelWidths);

  // Add the circle for the nodes
  svg
    .selectAll('mynodes')
    .data(data.nodes)
    .enter()
    .append('circle')
    .attr('cx', graphXStartingPoint)
    .attr('cy', function(d) {
      return y(d.text);
    })
    .attr('r', 8)
    .style('fill', '#fff');

  // Add links between nodes. Here is the tricky part.
  // In my input data, links are provided between nodes -id-, NOT between node names.
  // So I have to do a link between this id and the name
  const idToNode = {};
  data.nodes.forEach(function(n) {
    idToNode[n.key] = n;
  });
  // Cool, now if I do idToNode["2"].name I've got the name of the node with id 2

  // Add the links
  svg
    .selectAll('mylinks')
    .data(data.links)
    .enter()
    .append('path')
    .attr('d', function(d) {
      const start = y(idToNode[d.source].text); // X position of start node on the X axis
      const end = y(idToNode[d.target].text); // X position of end node
      return [
        'M',
        graphXStartingPoint,
        start, // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
        'A', // This means we're gonna build an elliptical arc
        ((start - end) / 2) * 4,
        ',', // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
        (start - end) / 1.3,
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
    .attr('stroke', 'black');
});
