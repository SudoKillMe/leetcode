const assert = require('assert');

const judgeCircle = function (moves) {
  const position = [0, 0];

  for (let i=0; i<moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        position[1]++;
        break;
      case 'D':
        position[1]--;
        break;
      case 'R':
        position[0]++;
        break;
      case 'L':
        position[0]--;
        break;
    }
  }

  return position[0] === 0 && position[1] === 0;
}

assert.equal(true, judgeCircle('UD'));
assert.equal(false, judgeCircle('LL'));