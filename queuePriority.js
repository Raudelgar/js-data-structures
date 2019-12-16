const Queue = require('./queue.js');
class QueuePriority extends Queue {
	constructor(...args) {
		super(...args);
	}

	/**
	 * For this implementation of enqueue func, will be messure the priority based on:
	 * The Priority 5 is considered default.
	 * Any Priority Number less than 5 is considere higher, where 1 is the highest
	 * Any Priority Number greater than 5 is considere small, where 10 is the smaller
	 * The ausence or zero priority number, will consider as default
	 * @param {any} val
	 * @param {Number} prior
	 */
	enqueue(val, prior = 5) {
		if (this.size() === 0) {
			return super.enqueue([val, prior]);
		} else {
			for (let i = 0; i < this.size(); i++) {
				if (prior >= this[i][1]) {
					return super.splice(i, 0, [val, prior]);
				} else if (i === this.size() - 1) {
					return super.splice(i + 1, 0, [val, prior]);
				} else {
					continue;
				}
			}
		}
	}

	dequeue(prior = 0) {
		if (prior === 0) {
			return super.dequeue();
		} else {
			let sub = [];
			for (let i = 0; i < this.size(); i++) {
				if (prior === this[i][1]) {
					sub.push(this[i]);
				}
			}
			return sub.pop();
		}
	}
}

module.exports = QueuePriority;
