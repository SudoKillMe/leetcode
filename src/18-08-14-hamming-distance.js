const assert = require('assert');

const hammingDistance = function (x, y) {
  let x_binary = x.toString(2);
  let y_binary = y.toString(2);
  const x_len = x_binary.length;
  const y_len = y_binary.length;
  if (x_len < y_len) {
    x_binary = Array(y_len - x_len).fill(0).join('') + x_binary;
  } else if (y_len < x_len) {
    y_binary = Array(x_len - y_len).fill(0).join('') + y_binary;
  }
  let result = 0;
  for (let i = 0; i < x_binary.length; i++) {
    if (x_binary[i] !== y_binary[i]) {
      result += 1;
    }
  }
  return result;
}

const hammingDistanceBinary = function (x, y) {
  let xor = x^y;
  if (xor === 0) {
    return 0
  }
  let count = 0;
  while (xor !== 0) {
    xor &= xor - 1;
    count++;
  }
  return count;
}

assert.equal(2, hammingDistance(1, 4));
assert.equal(1, hammingDistance(1, 3));
assert.equal(1, hammingDistance(1, 5));

assert.equal(2, hammingDistanceBinary(1, 4));
assert.equal(1, hammingDistanceBinary(1, 3));
assert.equal(1, hammingDistanceBinary(1, 5));
// 001
// 100
// 101