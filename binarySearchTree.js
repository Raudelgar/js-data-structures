class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
/**
 * Binary Search Tree Implementation
 */
class BST {
	constructor(value = null) {
		this.root = value ? new Node(value) : value;
		this.count = value ? 1 : 0;
	}

	insert(val) {
		//if the Tree is empty, set the root
		if (this.root === null) {
			this.root = new Node(val);
			this.count++;
			return;
		} else {
			let currentNode = this.root;
			const searchTree = currentNode => {
				//if value less than the node, go left branch
				if (val < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = new Node(val);
						this.count++;
						console.log(val, currentNode);
						return;
					} else {
						currentNode = currentNode.left;
						searchTree(currentNode);
					}
				} else {
					//if value greater than the node, go right branch
					if (!currentNode.right) {
						currentNode.right = new Node(val);
						this.count++;
						console.log(val, currentNode);
						return;
					} else {
						currentNode = currentNode.right;
						searchTree(currentNode);
					}
				}
			};
			return searchTree(currentNode);
		}
	}

	removed(val) {
		//if tree empty, return -1
		if (this.size() === 0) {
			return -1;
		} else {
			let currentNode = this.root;
			let parent = null;
			const loop = (currentNode, parent) => {
				//if is equal === found
				if (val === currentNode.value) {
					this.count--;
					//if it's a leaf node
					if (!currentNode.left && !currentNode.right) {
						//find which branch
						return findBranch(currentNode, parent, null);
					} else if (!currentNode.right) {
						//if current has only left
						//find which branch
						return findBranch(
							currentNode,
							parent,
							currentNode.left,
							currentNode.right
						);
					} else if (!currentNode.left) {
						//if current has only right
						//find which branch
						return findBranch(
							currentNode,
							parent,
							currentNode.left,
							currentNode.right
						);
					} else {
						//if node has both
						let leafParent = currentNode.right;
						let leaf = leafParent.left;
						if (!leaf) {
							leafParent.left = currentNode.left;
						} else {
							while (leaf.left) {
								leafParent = leaf;
								leaf = leafParent.left;
							}
							leafParent.left = null;
							leaf.right = leafParent;
						}
						//find which branch
						return findBranch(currentNode, parent, leaf ? leaf : leafParent);
					}
				} else if (val < currentNode.value) {
					//if it less
					parent = currentNode;
					currentNode = currentNode.left;
					return currentNode ? loop(currentNode, parent) : -1;
				} else if (val > currentNode.value) {
					//if bigger
					parent = currentNode;
					currentNode = currentNode.right;
					return currentNode ? loop(currentNode, parent) : -1;
				}
			};
			const findBranch = (...args) => {
				//root case
				if (!args[1]) {
					this.root = args[2];
					args[2].left = args[0].left;
					args[2].right = args[0].right;
				} else if (args[0].value < args[1].value) {
					args[1].left = !args[2] ? null : args[2];
				} else {
					args[1].right = !args[3] ? (!args[2] ? null : args[2]) : args[3];
				}
				return args[0];
			};
			return loop(currentNode, parent);
		}
	}

	contains(val) {
		if (this.size() === 0) {
			return false;
		}
		let currentNode = this.root;
		while (currentNode) {
			if (val === currentNode.value) {
				return true;
			} else if (val < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return false;
		//using recursive
		// const find = currentNode => {
		// 	//if it's equal return true
		// 	if (val === currentNode.value) {
		// 		return true;
		// 	} else if (val < currentNode.value) {
		// 		//if it's less, go left
		// 		if (currentNode.left) {
		// 			return find(currentNode.left);
		// 		} else {
		// 			return false;
		// 		}
		// 	} else {
		// 		//if it's bigger, go right
		// 		if (currentNode.right) {
		// 			return find(currentNode.right);
		// 		} else {
		// 			return false;
		// 		}
		// 	}
		// };
		// return find(currentNode);
	}

	min() {
		let currentNode = this.root;
		while (currentNode.left) {
			currentNode = currentNode.left;
		}
		return currentNode.value;
	}

	max() {
		//same as min, but using recursive
		let currentNode = this.root;
		const findMax = currentNode => {
			if (!currentNode.right) {
				return currentNode.value;
			} else {
				currentNode = currentNode.right;
				return findMax(currentNode);
			}
		};
		return findMax(currentNode);
	}

	size() {
		return this.count;
	}

	//depth first search

	//in-order
	//left, root, right
	dfsInOrder() {
		let result = [];
		const traverse = node => {
			if (node.left) traverse(node.left);

			result.push(node.value);

			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return result;
	}

	//pre-order
	//root, left, right
	dfsPreOrder() {
		let result = [];
		const traverse = node => {
			result.push(node.value);

			if (node.left) {
				traverse(node.left);
			}

			if (node.right) {
				traverse(node.right);
			}
		};
		traverse(this.root);
		return result;
	}

	//post-order
	//left, right, root
	dfsPostOrder() {
		let result = [];
		const traverse = node => {
			if (node.left) {
				traverse(node.left);
			}

			if (node.right) {
				traverse(node.right);
			}

			result.push(node.value);
		};
		traverse(this.root);
		return result;
	}

	//breadth first search
	bfs() {
		let result = [];
		let queue = [this.root];

		while (queue.length) {
			let node = queue.shift();
			result.push(node.value);

			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}

		return result;
	}
}

module.exports = BST;
