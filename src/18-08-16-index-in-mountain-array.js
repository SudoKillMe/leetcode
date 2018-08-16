
const peakIndexInMountainArray = function (A) {
  if (A.length < 3 || A.length > 10000) {
    return -1;
  }

  const max = Math.max.apply(null, A);
  const maxIndex = A.indexOf(max);
}

const peakIndexInMountainArray2 = function (A) {
  if (A.length < 3 || A.length > 10000) {
    return -1;
  }

  let start = 0;
  let end = A.length - 1;

  while (A[start] < A[start + 1] && A[end] < A[end - 1]) {
    start++;
    end--;
  }
  if (A[start] > A[start + 1]) {
    return start;
  } else {
    return end;
  }
}