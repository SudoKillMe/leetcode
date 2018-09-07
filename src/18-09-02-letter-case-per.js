
const letterCasePermutation = function (S) {
  let res = [S];
  let l = [];
  for (let i=0; i<S.length; i++) {
    const low = S[i].toLowerCase();
    const hig = S[i].toUpperCase();
    
    for (let j=0; j<res.length; j++) {
      const cur = res[j];
      l.push(
        cur.slice(0, i) + low + cur.slice(i + 1)
      );
      l.push(
        cur.slice(0, i) + hig + cur.slice(i + 1)
      );
    }
    res = l;
    l = [];
  }

  return Array.from(new Set(res));
}
