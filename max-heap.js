class MaxHeap extends Array {
	constructor() {
		super();
	}

	insert(val) {
		this.push(val);
		this.bubbleUp();
		this.downHeap();
	}

	bubbleUp() {
		let index = this.length - 1;

		while (index > 0) {
			let element = this[index];
			let indexParent = Math.floor((index - 1) / 2);
			let parent = this[indexParent];

			if (parent >= element) {
				//min-heap parent <= element
				break;
			} else {
				this[index] = parent;
				this[indexParent] = element;
				index = indexParent;
			}
		}
		this.downHeap();
	}

	downHeap() {
		//also called bubble-down
		let start = 0;
		let end = this.length;
		let i = 0;

		while (i < end) {
			let parent = this[start];
			let leftI = 2 * start + 1;
			let rightI = 2 * start + 2;
			let leftChild = this[leftI];
			let rightChild = this[rightI];
			let max =
				leftChild >= rightChild
					? { val: leftChild, index: leftI }
					: { val: rightChild, index: rightI };

			if (parent < max.val) {
				//min-heap parent > children
				this[start] = max.val;
				this[max.index] = parent;
				start = max.index;
				i--;
			} else {
				break;
			}
		}
	}

	getRoot() {
		return this[0];
	}

	updateRoot(val) {
		this.splice(0, 1, val);
		this.downHeap();
	}

	extractRoot() {
		this.splice(0, 1);
		this.downHeap();
	}
}

module.exports = MaxHeap;

/*
Practicle example of the used

//Find the k smallest elements in the array
//k = 3
const coordinates = [4, 1, 5, 2, 3, 0, 10];

function solution(){
    let shunk = coordinates.slice(0, 3);
    let mh = new MaxHeap();

    shunk.forEach(c => mh.insert(c));

    for (let i = 3; i < coordinates.length; i++) {
	    if (mh.getRoot() > coordinates[i]) {
		    mh.updateRoot(coordinates[i]);
	    }
    }

    return mh;
}

For an opposite scenario, return k max elements, 
used a min-heap*, and filter insde the loop**

Note*: For a MIN-HEAP, just make the simple changes commented on the
MAX-HEAP class.
Note**: Update root in the heap just if the new value is bigger than the existing root;
    
    if (mh.getRoot() < coordinates[i]) {
        mh.updateRoot(coordinates[i]);
    }

*/
