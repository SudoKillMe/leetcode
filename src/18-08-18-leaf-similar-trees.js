
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

const result = [];

function leaves (root) {
  const left = root.left;
  const right = root.right;
  if (!left && !right) {
    result.push(root.val);
  } else {
    if (left) {
      leaves(left)
    } 
    if (right) {
      leaves(right);
    } 
  }
}

const leafSimilar = function (root1, root2) {}

const node1 = new TreeNode(3)
const node2 = new TreeNode(5)
const node3 = new TreeNode(1)
const node4 = new TreeNode(6)
const node5 = new TreeNode(2)
const node6 = new TreeNode(9)
const node7 = new TreeNode(8)
const node8 = new TreeNode(7)
const node9 = new TreeNode(4)
node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

node5.left = node8;
node5.right = node9;

leaves(node1);
console.log(result);