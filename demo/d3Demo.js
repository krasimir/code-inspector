const svg = d3.select('svg');

let width = +svg.node().getBoundingClientRect().width;
let height = +svg.node().getBoundingClientRect().height;

// svg objects
let link;
let node;
// the data - an object with nodes and links
let graph;

const forceProperties = {
  center: {
    x: 0.5,
    y: 0.5,
  },
  charge: {
    enabled: true,
    strength: -30,
    distanceMin: 1,
    distanceMax: 2000,
  },
  collide: {
    enabled: true,
    strength: 0.7,
    iterations: 1,
  },
  forceX: {
    enabled: false,
    strength: 0.1,
    x: 0.5,
  },
  forceY: {
    enabled: false,
    strength: 0.1,
    y: 0.5,
  },
  link: {
    enabled: true,
    distance: 30,
    iterations: 1,
  },
};

const simulation = d3.forceSimulation();

function updateForces() {
  // get each force by name and update the properties
  simulation
    .force('center')
    .x(width * forceProperties.center.x)
    .y(height * forceProperties.center.y);
  simulation
    .force('charge')
    .strength(forceProperties.charge.strength * forceProperties.charge.enabled)
    .distanceMin(forceProperties.charge.distanceMin)
    .distanceMax(forceProperties.charge.distanceMax);
  simulation
    .force('collide')
    .strength(
      forceProperties.collide.strength * forceProperties.collide.enabled
    )
    .radius(forceProperties.collide.radius)
    .iterations(forceProperties.collide.iterations);
  simulation
    .force('forceX')
    .strength(forceProperties.forceX.strength * forceProperties.forceX.enabled)
    .x(width * forceProperties.forceX.x);
  simulation
    .force('forceY')
    .strength(forceProperties.forceY.strength * forceProperties.forceY.enabled)
    .y(height * forceProperties.forceY.y);
  simulation
    .force('link')
    .id(function(d) {
      return d.id;
    })
    .distance(forceProperties.link.distance)
    .iterations(forceProperties.link.iterations)
    .links(forceProperties.link.enabled ? graph.links : []);

  // updates ignored until this is run
  // restarts the simulation (important if simulation has already slowed down)
  simulation.alpha(1).restart();
}

// add forces to the simulation
function initializeForces() {
  // add forces and associate each with a name
  simulation
    .force('link', d3.forceLink())
    .force('charge', d3.forceManyBody())
    .force('collide', d3.forceCollide())
    .force('center', d3.forceCenter())
    .force('forceX', d3.forceX())
    .force('forceY', d3.forceY());
  // apply properties to each of the forces
  updateForces();
}

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

  node.attr('transform', function(d) {
    return `translate(${d.x}, ${d.y})`;
  });
}

// set up the simulation and event to update locations after each tick
function initializeSimulation() {
  simulation.nodes(graph.nodes);
  initializeForces();
  simulation.on('tick', ticked);
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
  if (!d3.event.active) simulation.alphaTarget(0.0001);
  d.fx = null;
  d.fy = null;
}

// generate the svg objects and force simulation
function initializeDisplay() {
  // set the data and properties of link lines
  link = svg
    .append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(graph.links)
    .enter()
    .append('line')
    .attr('stroke-width', forceProperties.link.enabled ? 1 : 0.5)
    .attr('opacity', forceProperties.link.enabled ? 1 : 0);

  // set the data and properties of node circles
  node = svg
    .append('g')
    .attr('class', 'nodes')
    .selectAll('circle')
    .data(graph.nodes)
    .enter()
    .append('g');

  node
    .append('circle')
    .attr('stroke', forceProperties.charge.strength > 0 ? 'blue' : 'red')
    .attr(
      'stroke-width',
      forceProperties.charge.enabled === false
        ? 0
        : Math.abs(forceProperties.charge.strength) / 15
    )
    .call(
      d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    )
    .call(dot => {
      dot.attr('r', data => {
        console.log(data);
        return 10;
      });
    });

  node
    .append('text')
    .attr('x', 10)
    .text(function(d) {
      return d.id;
    });
}

window.addEventListener('load', () => {
  d3.select(window).on('resize', function() {
    width = +svg.node().getBoundingClientRect().width;
    height = +svg.node().getBoundingClientRect().height;
    updateForces();
  });

  d3.json('d3Data.json', function(error, _graph) {
    if (error) throw error;
    graph = _graph;
    initializeDisplay();
    initializeSimulation();
  });
});
