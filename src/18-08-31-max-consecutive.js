const assert = require('assert');
const findMaxConsecutiveOnes = function (nums) {
  let left = -1;
  let max = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === 1) {
      max = Math.max(max, i-left);
    } else {
      left = i;
    }
  }

  return max;
}

assert(3, findMaxConsecutiveOnes([1,1,0,1,1,1]));

