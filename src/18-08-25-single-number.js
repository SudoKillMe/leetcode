
const singleNumber = function (nums) {
  const map = {};

  nums.forEach(num => {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  });

  for (let key in map) {
    if (map[key] === 1) {
      return +key;
    }
  }
};

/**
 * 这个解法简直牛逼
 * n ^ n = 0
 * 0 ^ n = n
 * @param {*} nums 
 */
const awesome = function (nums) {
  return nums.reduce((total, num) => total ^ num, 0);
}

console.log(awesome([4, 1, 2, 1, 2]));