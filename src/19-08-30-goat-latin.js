
const toGoatLatin = function (S) {
  const arr = S.split(' ')
  const result = [];
  arr.forEach((word, index) => {
    result.push(transform(word, index))
  })

  return result.join(' ')
}

function transform (word, index) {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  const first = word[0]
  let result;
  if (vowel.includes(first.toLowerCase())) {
    result = word + 'ma'
  } else {
    result = word.slice(1) + first + 'ma'
  }
  for (i=0; i<= index; i++) {
    result = result + 'a'
  }
  return result
}