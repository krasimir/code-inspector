// https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

function drawGraph(svgElement, graph) {
  const svg = d3.select(svgElement);
  const width = window.innerWidth;
  const height = window.innerHeight;

  function ticked() {
    link
      .attr('x1', function(d) {
        return d.source.x;
      })
      .attr('y1', function(d) {
        return d.source.y;
      })
      .attr('x2', function(d) {
        return d.target.x;
      })
      .attr('y2', function(d) {
        return d.target.y;
      });

    node
      .attr('cx', function(d) {
        return d.x;
      })
      .attr('cy', function(d) {
        return d.y;
      });
  }
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  function createNode() {
    const n = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(graph.nodes)
      .enter()
      .append('circle')
      .attr('r', data => {
        const sizes = [16, 13, 8, 6, 4, 3, 2];
        const radius = sizes[data.scopeDepth];
        if (radius) {
          return radius;
        }
        return 3;
      })
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    return n;
  }

  const simulation = d3
    .forceSimulation()
    .force(
      'link',
      d3.forceLink().id(function(d) {
        return d.id;
      })
    )
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2));

  const link = svg
    .append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(graph.links)
    .enter()
    .append('line');

  const node = createNode();

  node.append('title').text(function(d) {
    return d.id;
  });

  simulation.nodes(graph.nodes).on('tick', ticked);

  simulation.force('link').links(graph.links);
}

window.addEventListener('load', () => {
  d3.json('./d3Data.json', function(error, graph) {
    if (error) throw error;
    drawGraph(document.querySelector('svg'), graph);
  });
});
