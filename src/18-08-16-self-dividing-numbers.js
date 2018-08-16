
const selfDividingNumbers = function (left, right) {
  const result = [];
  for ( i = left; i <= right; i++ ) {
    if (isDividingNumber(i)) {
      result.push(i);
    }
  }
  return result;
}

function isDividingNumber (number) {
  const str = number.toString().split('');
  if (str.indexOf('0') !== -1) {
    return false;
  }

  return str.every(num => number % +num === 0);
}

let res = selfDividingNumbers(1, 22);
