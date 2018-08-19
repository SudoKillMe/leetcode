
const assert = require('assert');

const reverseStr = function (s, k) {
  if (s.length <= k) {
    return s.split('').reverse().join('');
  }
  let res = '';
  for (let i=0; i<s.length; i+=2*k) {
    const part = s.slice(i, i+k);
    res += part.split('').reverse().join('');
    res += s.slice(i+k, i + 2*k)
  }
  return res;
}

assert.equal('bacdfeg', reverseStr('abcdefg', 2));