class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}
/**
 * Singly LinkedList Implementation
 *
 * @class LinkedList
 */
class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	/**
	 * Insertion method
	 * Time complexity is O(1);
	 *
	 * @param {*} val
	 * @returns
	 * @memberof LinkedList
	 */
	insert(val) {
		//check if head
		if (!this.head) {
			this.head = new Node(val);
			this.length++;
		} else {
			let node = new Node(val);
			let currentNode = this.head;
			this.head = node;
			node.next = currentNode;
			this.length++;
		}
		return this.length;
	}

	/**
	 * Find the last node/element in the LinkedList
	 * Time-complexity o(n), when 'n' is the number of node in the list
	 *
	 * @returns
	 * @memberof LinkedList
	 */
	getLast() {
		//start from the  head
		let node = this.head;
		while (node.next) {
			node = node.next;
		}
		return node.value;
	}

	/**
	 * Removed an specific element in the LinkedList
	 * Time complexity O(n), if the element is not the head
	 *
	 * @param {*} val
	 * @returns
	 * @memberof LinkedList
	 */
	removed(val) {
		//if empty
		if (this.length === 0) {
			return false;
		} else if (val === this.head.value) {
			//check if head
			if (this.length === 1) {
				this.head = null;
				this.length = 0;
			} else {
				let newHead = this.head.next;
				this.head = null;
				this.head = newHead;
				this.length--;
			}
			return true;
		} else {
			let node = this.head.next;
			let prev = this.head;
			while (node) {
				if (val === node.value) {
					prev.next = node.next;
					node = null;
					this.length--;
					return true;
				} else {
					prev = node;
					node = node.next;
				}
			}
			return false;
		}
	}

	empty() {
		this.head = null;
		this.length = 0;
		return this.length;
	}
}

module.exports = LinkedList;
