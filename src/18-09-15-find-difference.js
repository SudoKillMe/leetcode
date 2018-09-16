
const findTheDifference = function (s, t) {
  const len = t.length;
  for (let i=0; i< len; i++) {
    const sub = t.slice(0, i) + t.slice(i + 1);
    if (sub === s) {
      return t[i];
    }
  }
  return '';
}

const findTheDifferenceModify = function (s, t) {
  const sArr = s.split('');
  const tArr = t.split('');

  for (let i=0, len=sArr.length; i<len; i++) {
    if (sArr[i] !== tArr[i]) {
      return tArr[i];
    }
  }

  return tArr[tArr.length - 1];
}


const s = 'abcd';
const t = 'abcde';

console.log(findTheDifferenceModify(s, t));
