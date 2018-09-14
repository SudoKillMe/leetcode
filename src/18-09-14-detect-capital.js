
const detectCapialUse = function (word) {
  const arr = word.split('');
  if (isUpper(arr[0])) {
    const left = arr.slice(1);
    return arr.every(c => {
      return isUpper(c);
    }) || left.every(c => {
      return isLower(c);
    }); 
  } else {
    return arr.every(c => {
      return isLower(c);
    });
  }
}

function isLower (char) {
  const ascii = char.charCodeAt();
  return ascii >= 97 && ascii <= 122;
}

function isUpper (char) {
  const ascii = char.charCodeAt();
  return ascii >= 65 && ascii <= 90;
}

const test = 'USA';
console.log(detectCapialUse(test));

const test2 = 'FLaG';
console.log(detectCapialUse(test2));

const test3 = 'Google';
console.log(detectCapialUse(test3));