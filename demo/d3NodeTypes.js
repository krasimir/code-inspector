const Nodes = {
  getGraphic(n) {
    return n.append('circle').attr('r', data => {
      const sizes = [16, 13, 8, 6, 4, 3, 2];
      const radius = sizes[data.scopeDepth];
      if (radius) {
        return radius;
      }
      return 3;
    });
  },
};
