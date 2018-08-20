
const assert = require('assert');

const shortestToChar = function (S, C) {
  const result = [];
  cPointer = -1;
  for (let i=0; i<S.length; i++) {
    if (S[i] === C) {
      cPointer = i;
    }
    if (cPointer < 0) {
      result.push(S.length);
    } else {
      result.push(i - cPointer)
    }
  }

  cPointer = -1;
  for (let j=S.length -1; j>=0; j--) {
    if (S[j] === C) {
      cPointer = j;
    } 
    if (cPointer > 0) {
      result[j] = Math.min(result[j], cPointer - j)
    }
  }
  return result;
}

assert.deepEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0], shortestToChar('loveleetcode', 'e'));