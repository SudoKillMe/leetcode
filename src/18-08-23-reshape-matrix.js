
const assert = require('assert');

const matrixReshape = function (nums, r, c) {
  const flat = nums.reduce((total, cur) => total.concat(cur), []);
  console.log(flat);
  if (flat.length !== r * c) {
    return nums;
  }

  const result = [];
  for (let i=0; i<flat.length; i+=c) {
    const row = [];
    for (let j=i; j < i+c; j++) {
      row.push(flat[j]);
    }
    result.push(row);
  }
  console.log(result);
  return result;
}


matrixReshape([[1,2],[3,4]], 4, 1);
const test1 = [[1, 2], [3, 4]];

// assert.deepEqual(test1, matrixReshape(test1));