
const arrayPairSum = function (nums) {
  nums.sort(sortNumber);
  let result = 0;
  for (i = 0; i< nums.length; i+= 2) {
    result += Math.min(nums[i], nums[i+1]);
  }
  return result
}

function sortNumber (a, b) {
  return a - b;
}

arrayPairSum([98,12,454,21,65,3,2,1]);