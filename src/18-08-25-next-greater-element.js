const nextGreaterElement = function (findNums, nums) {
  const result = [];

  findNums.forEach(num => {
    const index = nums.indexOf(num);

    let i = index;
    let first = -1;
    while (i < nums.length) {
      if (nums[i] > num) {
        first = nums[i]
        break;
      }
      i++;

    }
    result.push(first);
  });

  return result;
};