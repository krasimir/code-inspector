const ANSWER = 42;
function test(value, anotherOne, fooBar) {
  return value ? ANSWER : null;
}

function foobar() {
  const ANSWER = 100;
  const mult = v => v * 2;
  function sqrtAnd(v) {
    return Math.sqrt(v) + ANSWER + test(true);
  }
  const x = ANSWER * mult(2);
  console.log(ANSWER);
}

if (ANSWER === 42) {
  test('no');
} else {
  test('yes');
}
