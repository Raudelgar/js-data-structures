class Node {
	constructor(letter = '') {
		this.val = letter;
		this.children = {};
		this.end = false;
	}
}

class Trie {
	constructor() {
		this.root = new Node();
	}

	insert(word) {
		let node = this.root;

		if (word || word !== ' ') {
			for (let i = 0; i < word.length; i++) {
				let curr = word[i];
				if (!node.children.hasOwnProperty(curr)) {
					let newNode = new Node(curr);
					node.children[curr] = newNode;
					node = newNode;
				} else {
					node = node.children[curr];
				}
			}
			node.end = true;
		}
	}

	find(word) {
		let node = this.root;

		if (!word || word === ' ') return false;

		for (let i = 0; i < word.length; i++) {
			let letter = word.charAt(i);

			if (!node.children.hasOwnProperty(letter) || letter === '') {
				return false;
			} else {
				let newNode = node.children[letter];
				node = newNode;
			}

			if (i === word.length - 1 && !node.end) {
				return false;
			}
		}

		return true;
	}

	remove(word) {}

	search(word, node = this.root) {
		for (let ch of word) {
			if (!node.hash.hasOwnProperty(ch)) {
				return false;
			}
			node = node.hash[ch];
		}
		return node.end;
	}

	findByPrefix(prefix) {
		let result = [];
		let node = this.root;

		for (let p of prefix) {
			if (!node.hash.hasOwnProperty(p)) {
				return false;
			}
			node = node.hash[p];
		}

		const traverseTrie = (node, result, prefix, word = []) => {
			let keys = Object.keys(node.hash);
			console.log('keys', keys);

			for (let k of keys) {
				word.push(k);
				console.log('node', node.hash);
				console.log('end', node.end);
				if (node.end) {
					console.log('word', word);
				} else {
					let newNode = node.hash[k];
					// console.log(node.hash);
					traverseTrie(newNode, result, prefix, word);
					word.pop();
				}
			}
		};
		traverseTrie(node, result, prefix);

		// console.log(result);
	}
}

module.exports = Trie;
