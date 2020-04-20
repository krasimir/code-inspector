function scopeToRadius(data) {
  const scopes = data.node.scopePath.split('.');
  const sizes = [16, 13, 8, 6, 4, 3, 2];
  const radius = sizes[scopes.length];
  if (radius) {
    return radius;
  }
  return 3;
}
function circle(container, radius) {
  container.append('circle').attr('r', radius);
  return container;
}

function circleWithText(container, text, radius) {
  container.append('circle').attr('r', radius);
  const t = container.append('text').text(text);
  t.attr('x', -t.node().getBBox().width / 2);
  t.attr('y', 4);
  return container;
}
function reactWithText(container, text, fz = 14) {
  const r = container
    .append('rect')
    .attr('width', 10)
    .attr('height', 23)
    .attr('rx', 3);
  const t = container
    .append('text')
    .text(text)
    .attr('font-size', fz);

  r.attr('width', t.node().parentNode.getBBox().width + 10);
  r.attr('x', -5);
  r.attr('y', -15);
  container.attr('class', 'rect-with-text');
  return container;
}

const Nodes = {
  getGraphic(n) {
    return n.append('g').each(function(d, i) {
      let graphic;
      switch (d.node.type) {
        case 'Program':
          graphic = reactWithText(d3.select(this), 'program', 20);
          break;
        case 'FunctionDeclaration':
          graphic = reactWithText(d3.select(this), d.node.meta.funcName);
          break;
        default:
          graphic = reactWithText(d3.select(this), d.node.text, 12);
      }
      graphic.attr('class', `${graphic.attr('class')} ${d.node.type}`);
    });
  },
};
