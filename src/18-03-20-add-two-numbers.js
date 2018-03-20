
function ListNode (val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (v1, v2) {
  const result = [];

  let needCarry = false;
  while (v1 && v2) {
    let current = v1.val + v2.val;
    if (needCarry) {
      current++;
    }
    if (current >= 10) {
      needCarry = true;
      current = current % 10;
    } else {
      needCarry = false;
    }
    result.push(current);

    v1 = v1.next;
    v2 = v2.next;
  }
  while (v1) {
    result.push(v1.val);
    v1 = v1.next;
  }
  while (v2) {
    result.push(v2.val);
    v2 = v2.next;
  }

  console.log(result);
}

/** test */
var l1 = new ListNode(2);
var l2 = new ListNode(4);
var l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;

var l4 = new ListNode(5);
var l5 = new ListNode(6);
var l6 = new ListNode(4);
l4.next = l5;
l5.next = l6;

addTwoNumbers(l1, l4);