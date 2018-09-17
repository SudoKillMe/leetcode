const assert = require('assert');

const findDisappearedNumbers = function(nums) {
  const map = [];
  nums.forEach(num => {
    map[num] = 1;
  });
  const res = [];
  for (let i = 1; i <= nums.length; i++) {
    if (map[i] === undefined) {
      res.push(i);
    }
  }
  return res;
};

let test = [4, 3, 2, 7, 8, 2, 3, 1];
let expect = [5, 6];

let test2 = [1, 1];
let expect2 = [2];

assert.deepEqual(findDisappearedNumbers(test), expect);
assert.deepEqual(findDisappearedNumbers(test2), expect2);
