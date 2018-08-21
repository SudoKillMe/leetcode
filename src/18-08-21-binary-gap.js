const assert = require('assert');

const binaryGap = function (N) {
  const binary = N.toString(2);

  let distance = 0;
  let pointer = -1;
  for (let i=0; i<binary.length; i++) {
    if (binary[i] === '1') {
      if (pointer < 0) {
        pointer = i;
      } else {
        distance = Math.max(i - pointer, distance);
        pointer = i;
      }
    }
  }

  return distance;
}


assert.equal(2, binaryGap(22));
assert.equal(2, binaryGap(5));
assert.equal(0, binaryGap(8));
assert.equal(1, binaryGap(6));