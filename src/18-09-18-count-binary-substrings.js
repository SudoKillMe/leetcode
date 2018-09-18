const assert = require('assert');

const countBinarySubstringsDeprec = function(s) {
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
}

const countBinarySubstrings = function(s) {
  let pre = 0;
  let cur = 1;
  let res = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cur++;
    } else {
      res += Math.min(cur, pre);
      pre = cur;
      cur = 1;
    }
  }
  return (res += Math.min(cur, pre));
};

const t1 = '00110011';
const e1 = 6;

const t2 = '10101';
const e2 = 4;

assert.equal(countBinarySubstrings(t1), e1);
assert.equal(countBinarySubstrings(t2), e2);
