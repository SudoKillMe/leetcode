const assert = require('assert');

const distributeCandies = function (candies) {
  const maps = {};
  candies.forEach(candy => {
    maps[candy] = maps[candy] ? maps[candy] + 1 : 1;
  });
  const keys = Object.keys(maps);
  if (keys.length > candies.length / 2) {
    return candies.length / 2;
  }
  return keys.length;
};

assert(3, distributeCandies([1, 1, 2, 2, 3, 3]));
assert(2, distributeCandies([1, 1, 2, 3]));
