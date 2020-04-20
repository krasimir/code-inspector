/* eslint-disable @typescript-eslint/no-use-before-define */
// Source: https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7
// Docs: https://github.com/d3/d3-force#links

function drawGraph(svgElement, graph) {
  graph.nodes.reverse();
  graph.links.reverse();
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

    node.style('transform', d => `translate(${d.x}px, ${d.y}px)`);
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
    return Nodes.getGraphic(
      svg
        .append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(graph.nodes)
        .enter()
    )
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      )
      .on('mouseover', data => {
        tooltip
          .style('display', 'block')
          .style(
            'transform',
            `translate(${d3.event.pageX + 10}px, ${d3.event.pageY - 30}px)`
          )
          .transition()
          .duration(450)
          .ease(d3.easeQuadOut)
          .style('opacity', 1);
        tooltip.select('text').text(
          data.scopePath
            .split('.')
            .map(s => {
              const text = s.split('-').shift();
              if (text === '') return 'root';
              return text;
            })
            .join('.')
        );
        tooltip.select('rect').attr(
          'width',
          tooltip
            .select('text')
            .node()
            .getBBox().width + 20
        );
      })
      .on('mouseout', () => {
        tooltip.style('display', 'none');
        tooltip.style('opacity', 0);
        tooltip.select('text').text('');
      })
      .style('opacity', n => {
        const step = 1 / 8;
        const scopeDepth = n.scopePath.split('.').length;
        return 1 - scopeDepth * step;
      });
  }
  function createLink() {
    return svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graph.links)
      .enter()
      .append('line');
  }
  function createTooltip() {
    const t = svg.append('g');
    t.attr('class', 'tooltip');
    t.style('display', 'none');
    t.style('opacity', 0);
    t.append('rect')
      .attr('width', 100)
      .attr('height', 30)
      .attr('rx', 4);
    t.append('text')
      .text('...')
      .attr('x', 10)
      .attr('y', 18);

    return t;
  }
  function countLinks(n) {
    return graph.links.reduce((res, { source, target }) => {
      if (source.key === n.key || target.key === n.key) {
        return res + 1;
      }
      return res;
    }, 0);
  }

  const simulation = d3
    .forceSimulation()
    .force(
      'link',
      d3
        .forceLink()
        .id(function(d) {
          return d.key;
        })
        .distance(l => {
          const d = countLinks(l.target) * 20;
          console.log(`${l.source.text} - ${l.target.text} = ${d}`);
          return d;
        })
        .strength(l => 1 / countLinks(l.source))
    )
    .force('charge', d3.forceManyBody().strength(-50))
    .force('center', d3.forceCenter(width / 2, height / 2));

  const link = createLink();
  const node = createNode();
  const tooltip = createTooltip();

  simulation.nodes(graph.nodes).on('tick', ticked);

  simulation.force('link').links(graph.links);
}

window.addEventListener('load', () => {
  d3.json('./d3Data.json', function(error, graph) {
    if (error) throw error;
    drawGraph(document.querySelector('svg'), graph);
  });
});
