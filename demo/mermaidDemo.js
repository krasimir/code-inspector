window.addEventListener('load', function() {
  mermaid.mermaidAPI.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
  });

  function draw(graphData) {
    const element = document.querySelector('#mermaid');
    const insertSvg = function(svgCode, bindFunctions) {
      element.innerHTML = svgCode;
    };

    const graph = mermaid.mermaidAPI.render('graph', graphData, insertSvg);
  }

  fetch('./mermaid.graph').then(res => {
    res.text().then(draw);
  });
});
