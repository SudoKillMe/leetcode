
const findTheDifference = function (s, t) {
  const len = t.length;
  for (let i=0; i< len; i++) {
    const sub = t.slice(0, i) + t.slice(i + 1);
    console.log('i: ', i, ' sub: ',sub);
    if (sub === s) {
      return t[i];
    }
  }
  return '';
}

const s = 'abcd';
const t = 'abcde';

console.log(findTheDifference(s, t));