
const assert = require('assert');

const reverseWords = function (s) {
  const arr = s.split(' ');
  return arr.map(str => {
    return str.split('').reverse().join('');
  }).join(' ');
}

const t = "Let's take LeetCode contest";
assert.equal("s'teL ekat edoCteeL tsetnoc", reverseWords(t));