const assert = require('assert');

const fairCandySwap = function (A, B) {
  let al = A.length;
  let bl = B.length;

  const atotal = sum(A);
  const btotal = sum(B);
  for (let i=0; i<al; i++) {
    for (let j=0; j<bl; j++) {
      if ((atotal - A[i] + B[j]) === (btotal - B[j] + A[i])) {
        return [A[i], B[j]];
      }
    }
  }
}

function sum (arr) {
  return arr.reduce((total, num) => total + num, 0);
}

const a1 = [1, 1];
const b1 = [2, 2];

assert.deepEqual([1, 2], fairCandySwap(a1, b1));

const a2 = [1,2];
const b2 =[2, 3];
assert.deepEqual([1, 2], fairCandySwap(a2, b2));

const a3 = [2];
const b3 = [1, 3];
assert.deepEqual([2, 3], fairCandySwap(a3, b3));

const a4 = [1, 2, 5];
const b4 = [2, 4];
assert.deepEqual([5, 4], fairCandySwap(a4, b4));