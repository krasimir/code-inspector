const ANSWER = 42;
const DATA = [1, 2, 3];

function NormalizeBoo(a) {
  return a.toUpperCase();
}

const somethingElse = (a, b) => {
  const answer = getAnswer(() => '300');
  return `the answer is ${answer}`;
};

class Moo {
  private a = 100;

  public go(c, d) {
    const foo = () => {
      // comment
    };
    function boo() {
      const a = 200;
      DATA.forEach(v => {
        console.log(v);
      });
    }
    return 'ok';
  }
}

function boo() {
  // a second one
}
