/** 
 * rate - easy
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/** 
 * @param Array<number> nums
 * @param number target
 * @return Array<number>
 */
function twoSum (nums, target) {
  const map = {};
  for (let i=0; i<nums.length; i++) {
    const current = nums[i];
    const complementary = target - current;
    if (map[current] || map[current] === 0) {
      return [map[current], i];
    }
    map[complementary] = i;
  }
}

/** test */
const arr = [1, 2, 3, 6, 8];
const target = 8;
console.log(twoSum(arr, target));