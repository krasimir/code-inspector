/* eslint-disable no-fallthrough, no-case-declarations */
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
  const textHeight = t.node().parentNode.getBBox().height;

  r.attr('width', t.node().parentNode.getBBox().width + 10);
  r.attr('height', textHeight - 10);
  r.attr('x', -5);
  r.attr('y', -textHeight / 2);
  container.attr('class', 'rect-with-text');
  return container;
}

const Nodes = {
  getGraphic(n) {
    return n.append('g').each(function(d, i) {
      let graphic;
      switch (d.type) {
        case 'Program':
          graphic = reactWithText(d3.select(this), 'program', 20);
          break;
        case 'FunctionDeclaration':
          const scopeDepth = d.scopePath.split('.').length;
          graphic = reactWithText(
            d3.select(this),
            d.meta.funcName,
            10 + 8 / scopeDepth
          );
          break;
        case 'Identifier':
          if (d.isVariable) {
            graphic = reactWithText(d3.select(this), d.text);
            graphic.attr('class', `${graphic.attr('class')} Variable`);
            break;
          }
        default:
          graphic = reactWithText(d3.select(this), d.text, 12);
      }
      graphic.attr('class', `${graphic.attr('class')} ${d.type}`);
    });
  },
};
