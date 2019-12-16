const Queue = require('./queue.js');
const QueuePriority = require('./queuePriority.js');
const BST = require('./binarySearchTree.js');

console.log('*****  Binary Search Tree class *****');
const bST = new BST();
bST.insert(50);
bST.insert(17);
bST.insert(4);
bST.insert(72);
bST.insert(56);
bST.insert(80);
bST.insert(53);
bST.insert(23);
bST.insert(87);
bST.insert(77);
console.log(bST);
console.log(bST.min()); // 4
console.log(bST.max()); // 80
console.log(bST.contains(56)); // true
console.log(bST.contains(3)); // false
console.log('Removing from Tree');
console.log(bST.removed(51)); // -1 because it doesn't exist in the tree
console.log(bST.removed(4)); // Case1 (Leaf) => Node { value: 4, left: null, right: null }
console.log(bST.removed(56)); // Case2 (Node w/One child) => Node { value: 56, left: Node { value: 53, left: null, right: null }, right: null }
console.log(bST.removed(80)); // Case3 (Node w/Two child) => Node { value: 80, left: Node { value: 77, left: null, right: null }, right: Node { value: 87, left: null, right: null } }
console.log(bST.removed(50)); // Case3 (Node w/Two child) => Node { value: 80, left: Node { value: 77, left: null, right: null }, right: Node { value: 87, left: null, right: null } }
console.log(bST.root);

const bST1 = new BST();
// bST1.insert(77); // { root: Node { value: 77, left: null, right: null }, count: 1 }
// bST1.insert(47); // { root: Node { value: 77, left: Node { value: 47, left: null, right: null }, right: null }, count: 2 }
// console.log('with constructor', bST1);
