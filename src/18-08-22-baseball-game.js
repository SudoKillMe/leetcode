
const calPoints = function (ops) {
  const result = [];

  for (let i = 0; i < ops.length; i++) {
    let char = ops[i];
    let length = result.length;
    let last = length > 0 ? result[result.length - 1] : 0;
    let last2 = length > 1 ? result[result.length - 2] :  0;
    switch (char) {
      case '+':
        result.push(last + last2);
        break;
      case 'D':
        result.push(last * 2);
        break;
      case 'C':
        result.pop();
        break;
      default:
        result.push(parseInt(char))
    }
  }

  return result.reduce((total, sum) => total + sum, 0)
};

calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]);