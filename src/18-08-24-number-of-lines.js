
const numberOfLines = function (widths, S) {
  let row = 1;
  let units = 0;
  for (let i=0; i<S.length; i++) {
    const index = S[i].charCodeAt() - 97;
    units += widths[index];
    if (units > 100) {
      row++;
      units = widths[index];
    }
  }

  return [row, units];
}