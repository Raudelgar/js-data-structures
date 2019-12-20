const Queue = require('./queue.js');
const QueuePriority = require('./queuePriority.js');
const BST = require('./binarySearchTree.js');
const LinkedList = require('./linkedList.js');

console.log('*****  LinkedList class *****');
const ll = new LinkedList();
console.log(ll.insert(5)); // { head: Node { value: 5, next: null }, length: 1 }
console.log(ll.insert(7)); // { head: Node { value: 7, next: Node { value: 5, next: null } }, length: 2 }
console.log(ll.insert(40)); // { head: Node { value: 40, next: Node { value: 7, next: [Node] } }, length: 3 }
console.log('LinkedList Tail');
console.log(ll.getLast()); // 5
console.log('Removed element');
// console.log(ll.removed(8)); //false
// console.log(ll.removed(5)); //true
// console.log(ll.removed(40)); //true
// console.log(ll.removed(7)); //true
ll.empty(); //{ head: null, length: 0 }
console.log(ll);
