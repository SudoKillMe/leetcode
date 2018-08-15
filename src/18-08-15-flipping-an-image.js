const assert = require('assert');

const flipAndInvertImage = function (a) {
  const fliped = a.map(item => {
    return item.reverse();
  });
  const result = fliped.map(item => {
    const reversed = item.map(ele => {
      return ele ^ 1;
    })
    return reversed;
  });
  return result;
}

const test1 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
const excepet1 = [[1, 0, 0], [0, 1, 0], [1, 1, 1]];
assert.deepEqual(excepet1, flipAndInvertImage(test1));

const test2 = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
const excepet2 = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]];
assert.deepEqual(excepet2, flipAndInvertImage(test2));