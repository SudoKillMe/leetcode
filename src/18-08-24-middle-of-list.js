
const middleNode = function (head) {
  const result = [];

  let cur = head;
  while (cur) {
    result.push(cur);
    cur = cur.next
  }
  console.log(result);
  return result[Math.floor(result.length / 2)];
}

middleNode([1,2,3,4,5]);