const assert = require('assert');

const countBinarySubstrings = function(s) {
  const result = [];
  for (let i = 2; i <= s.length; i += 1) {
    const grouped = groupByCount(s, i);
    grouped.forEach(str => {
      if (equal0and1(str)) {
        result.push(str);
      }
    });
  }
  return result.length;
};

function groupByCount(str, count) {
  if (count % 2 !== 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const sub = str.slice(i, i + count);
    if (sub.length === count) {
      result.push(str.slice(i, i + count));
    }
  }
  return result;
}

function equal0and1(str) {
  let half = str.length / 2;
  let i = 0;
  let j = str.length - 1;

  const left = str.slice(0, half).split('');
  const right = str.slice(half, str.length).split('');

  return (
    (left.every(s => s === '0') && right.every(s => s === '1')) ||
    (left.every(s => s === '1') && right.every(s => s === '0'))
  );

  // while (i < half && j >= half) {
  //   if (str[i] === str[j]) {
  //     return false;
  //   }
  //   i++;
  //   j--;
  // }
  // return true;
  // let zero = 0;
  // let one = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === '0') {
  //     zero += 1;
  //   } else {
  //     one += 1;
  //   }
  // }
  // console.log('==== str: ', str);
  // console.log('====== zero: ', zero);
  // console.log('====== one: ', one);
  // return zero === one;
}

const t1 = '00110011';
const e1 = 6;

const t2 = '10101';
const e2 = 4;

assert.equal(countBinarySubstrings(t1), e1);
assert.equal(countBinarySubstrings(t2), e2);
