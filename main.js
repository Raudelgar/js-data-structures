const Queue = require('./queue.js');
const QueuePriority = require('./queuePriority.js');
const BST = require('./binarySearchTree.js');
const LinkedList = require('./linkedList.js');
const MaxHeap = require('./max-heap.js');
const Trie = require('./trie.js');

console.log('*****  Trie class *****');
const trie = new Trie();
trie.insert('apple');
trie.insert('apio');
trie.insert('alba');
console.log(trie.find('apple')); //true
console.log(trie.find('')); //false
console.log(trie.find(' ')); //false
console.log(trie.find('ap')); //false
// trie.findByPrefix('ap');
// console.log(trie.root.children['a'].children['l'].children['b'].children['a']);
