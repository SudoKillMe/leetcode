const assert = require('assert');
const table = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

function transform (str) {
  let result = '';
  for (i = 0; i < str.length; i++) {
    result += table[str[i]];
  }
  return result;
}

const uniqueMorseRepresentations = function (words) {
  const arr = words.map(word => transform(word));
  const result = [];
  arr.forEach(word => {
    if (result.indexOf(word) === -1) {
      result.push(word);
    }
  });
  return result.length;
}

assert.equal(2, uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));