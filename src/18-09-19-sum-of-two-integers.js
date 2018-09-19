const assert = require('assert');

const getSum = function(a, b) {
  const arr = [];
  for (let i = 0; i < Math.abs(a); i++) {
    arr.push(1);
  }
  for (let j = 0; j < Math.abs(b); j++) {
    arr.push(1);
  }
  if (a < 0) {
    for (let i = 0; i < Math.abs(2 * a); i++) {
      arr.pop();
    }
  }
  if (b < 0) {
    for (let i = 0; i < Math.abs(2 * b); i++) {
      arr.pop();
    }
  }
  return arr.length;
};

const a1 = 1;
const b1 = 2;
const e1 = 3;

const a2 = -2;
const b2 = 3;
const e2 = 1;
assert.equal(getSum(a1, b1), e1);
assert.equal(getSum(a2, b2), e2);
