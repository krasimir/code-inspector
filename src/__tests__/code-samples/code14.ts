function A(foo, bar) {}
const B = function Name(foo, bar) {};
const C = (foo, bar) => {};

(function(foo, bar) {});

const Obj = {
  D(foo, bar) {},
  E(foo, bar) {},
  F: (foo, bar) => {},
};

class F {
  constructor(foo, bar) {}

  G(foo, bar) {}
}
