const assert = require('assert');

const findComplement = function (num) {
  const mask = Math.pow(2, num.toString(2).length) - 1;
  return num ^ mask;
}

assert.equal(2, findComplement(5));
assert.equal(0, findComplement(1));
assert.equal(1, findComplement(0));