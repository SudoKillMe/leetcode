const assert = require('assert');

// a-z 97-122
// A-Z 65-90
const toLowerCase = function (str) {
  let result = '';
  for (var i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt();
    if (code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

assert.equal('hello', toLowerCase('Hello'));
assert.equal('here', toLowerCase('here'));
assert.equal('lovely', toLowerCase('LOVELY'));