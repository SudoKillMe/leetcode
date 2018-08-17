const assert = require('assert');
/**
 * [
 *  [1, 2, 3],
 *  [3, 4, 5],
 * ]
 * 
 * [
 *  [1, 3],
 *  [2, 4],
 *  [3, 5]
 * ]
 * @param {*} A 
 */


const transpose = function (A) {
  const row = A.length;
  const column = A[0].length;
  const result = [];
  for (let i=0; i<column; i++) {
    result[i] = [];
    for (let j=0; j<row; j++) {
      result[i][j] = A[j][i];
    }
  }
  return result;
}


const test1 = [[1,2,3],[4,5,6],[7,8,9]];
assert.deepEqual([[1,4,7],[2,5,8],[3,6,9]], transpose(test1));

const test2 = [[1, 2, 3], [4, 5, 6]];
assert.deepEqual([[1, 4], [2, 5], [3, 6]], transpose(test2));