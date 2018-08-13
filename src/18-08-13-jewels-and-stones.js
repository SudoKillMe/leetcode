const assert = require('assert');

var numJewelsInStones = function (J, S) {
  let count = 0;
  for (i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) !== -1) {
      count++;
    }
  }
  return count;
}

assert.equal(3, numJewelsInStones('aA', 'aAAbbbb'));
assert.equal(0, numJewelsInStones('z', 'ZZ'));