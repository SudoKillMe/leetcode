
const moveZeroes = function (nums) {
  let index=0;
  let lastZ = nums.length -1;
  let len = nums.length;

  while (nums[lastZ] === 0) {
    lastZ--;
  }

  for (let i=0; i<lastZ; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      lastZ--;
    }
  }

  // while (index < len) {
  //   if (index === lastZ) {
  //     break;
  //   }
  //   if (nums[index] === 0) {
  //     swap(nums, index, lastZ);
  //     lastZ--;
  //   }
  //   index++;
  // }

  // return nums;
}

const test = [0, 1, 0, 3, 12];
moveZeroes(test);
console.log(test);