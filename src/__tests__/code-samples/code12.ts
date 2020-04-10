const ANSWER = 42;
function test(value) {
  return value ? ANSWER : null;
}

function foobar() {
  const ANSWER = 100;
  const mult = v => v * 2;
  function sqrt(v) {
    return Math.sqrt(v);
  }
  const x = ANSWER * 2;
  console.log(ANSWER);
}

if (ANSWER === 42) {
  test('no');
} else {
  test('yes');
}
