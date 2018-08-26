const assert = require('assert');

const countPrimeSetBits = function (L, R) {
  let count = 0;
  for (i=L; i<=R; i++) {
    if (isPrimeBinary(i)) {
      count += 1;
    }
  }
  return count;
}

function isPrimeBinary (num) {
  const binary = num.toString(2);
  let count = 0;
  for (let i=0; i<binary.length; i++) {
    if (binary[i] === '1') {
      count += 1;
    }
  }

  return isPrime(count);
}

function isPrime (num) {
  if (num === 0 || num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const desp = Math.sqrt(num);

  for (let i=2; i<=desp; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


assert.equal(false, isPrime(0));
assert.equal(true, isPrime(2));
assert.equal(true, isPrime(3));
assert.equal(false, isPrime(4));

assert.equal(4, countPrimeSetBits(6, 10));
assert.equal(5, countPrimeSetBits(10, 15));
