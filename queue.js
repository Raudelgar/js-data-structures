/**
 * This is a custom Queue Data Structure, defined as
 * 'First In, First out' (FIFO). In this imeplementation
 * The First element will be at the tail of the array,
 * since an instances of this Queue can be used fill at the
 * constructor, so it's main purpouse could be dequeue it,
 * and in order to reduce complexity, it was choose this order.
 */
class Queue extends Array {
	/**
	 * This constructor allows me to implement the selected methods
	 * from the Array Interface, and blocking those not need it.
	 */
	constructor(...args) {
		if (args.length > 1) {
			let a = [];
			for (let i = args.length - 1; i >= 0; i--) {
				a.push(args[i]);
			}
			super(...a);
		} else {
			super(...args);
		}
	}

	/**
	 * Adding individual values,  will be always at index '0';
	 * @return new length
	 */
	enqueue(val) {
		return this.unshift(val);
	}

	/**
	 * Removing an element will be always the last element (this.length -1);
	 * @return this[this.length -1]
	 */
	dequeue() {
		return this.size() > 0 ? this.pop() : undefined;
	}

	head() {
		return this.size() > 0 ? this[this.size() - 1] : undefined;
	}

	size() {
		return this.length;
	}
}

module.exports = Queue;
