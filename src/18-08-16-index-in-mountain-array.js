
const peakIndexInMountainArray = function (A) {
  if (A.length < 3 || A.length > 10000) {
    return -1;
  }

  const max = Math.max.apply(null, A);
  console.log('max', max);
  const maxIndex = A.indexOf(max);
  const left = A.slice(0, maxIndex);
  const right = A.slice(maxIndex + 1);

  if (left.every(num => num < max) && right.every(num => num < max)) {
    return maxIndex;
  };
  return -1;
}

