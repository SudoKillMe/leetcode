
const moveZeroes = function (nums) {
  // let index=0;
  // let lastZ = nums.length -1;
  // let len = nums.length;

  // while (nums[lastZ] === 0) {
  //   lastZ--;
  // }

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

function swap (arr, i1, i2) {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}