const assert = require('assert');

const line1 = 'qwertyuiop'.split('');
const line2 = 'asdfghjkl'.split('');
const line3 = 'zxcvbnm'.split('');

const findWords = function (words) {
  const result = [];
  words.forEach(word => {
    if (isOneLine(word)) {
      result.push(word);
    }
  });
  return result;
}

function isOneLine (word) {
  const arr = word.toLowerCase().split('');
  return  arr.every(c => line1.indexOf(c) !== -1) ||
          arr.every(c => line2.indexOf(c) !== -1) ||
          arr.every(c => line3.indexOf(c) !== -1);
}

assert.deepEqual(["Alaska", "Dad"], findWords(["Hello", "Alaska", "Dad", "Peace"]));