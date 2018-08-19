const assert = require('assert');

const uncommonFromSentences = function (A, B) {
  let result = {};
  const a_arr = A.split(' ');
  const b_arr = B.split(' ');
  const c = a_arr.concat(b_arr);
  for (let i=0; i < c.length; i++) {
    if (result[c[i]]) {
      result[c[i]]++;
    } else {
      result[c[i]] = 1;
    }
  }
  let res = [];

  for (let i in result) {
    if (result[i] === 1) {
      res.push(i);
    }
  }
  return res;
}

assert.deepEqual(['sweet', 'sour'], uncommonFromSentences('this apple is sweet', 'this apple is sour'));
