
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

const middleNode2 = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

middleNode([1,2,3,4,5,6]);