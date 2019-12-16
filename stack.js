//Stack custom implementation 'Last In, First Out'(LIFO)
class Stack extends Array {
	constructor(...vals) {
		super(...vals);
	}

	pop() {
		if (this.length === 0) console.log('Nothing to pop, Stack is empty');
		return super.pop();
	}

	peek() {
		if (this.length === 0) console.log('The Stack si empty');
		return this[this.length - 1];
	}

	size() {
		return this.length;
	}
}

//Example of Stack used
//Return 'true' or 'false' if the string has proper open/closing tags

const str1 = '{([{([{}])}])}';
const str2 = '{([{([{}])})}';
const str3 = '{a[{([{}])}])}';

class Solution {
	constructor() {
		this.arr = [];
		this.stack = new Stack();
	}

	isComplete(str) {
		this.arr = str.split('');
		for (let i = 0; i < this.arr.length; i++) {
			let curr = this.arr[i];
			if (curr === '{' || curr === '(' || curr === '[') {
				this.stack.push(curr);
			} else {
				if (this.stack.size() === 0) {
					return false;
				}
				let last = this.stack.pop();
				if (curr === '}' && last === '{') {
				} else if (curr === ')' && last === '(') {
				} else if (curr === ']' && last === '[') {
				} else {
					return false;
				}
			}
		}
		return true;
	}
}

const s1 = new Solution();
console.log(s1.isComplete(str1)); //true
console.log(s1.isComplete(str2)); //false
console.log(s1.isComplete(str3)); //false

//Stack => Is a polindrome example
class Polindrome {
	constructor(word) {
		this.word = word;
	}

	isPolindrome() {
		let rts = this.word
			.split('')
			.reverse()
			.join('')
			.toString();
		console.log(this.word === rts);
	}
}

const p1 = new Polindrome('ABBA');
p1.isPolindrome();
const p2 = new Polindrome('word');
p2.isPolindrome();

//Another solution for Polindrome
class Polindrome2 {
	constructor(word) {
		this.word = word;
	}

	isPolindrome() {
		let arr =
			typeof this.word === 'string'
				? this.word.split('')
				: String(this.word).split('');
		console.log(arr);
		let halfLen = Math.floor(arr.length / 2);
		for (let i = 0; i < halfLen; i++) {
			if (arr[i] !== arr[arr.length - 1 - i]) {
				return false;
			}
		}
		return true;
	}
}

// const p1 = new Polindrome2('word'); //false
// const p1 = new Polindrome2('abnshdw'); //false
// const p1 = new Polindrome2('aqwerrewqaz'); //false
// const p1 = new Polindrome2('beb'); //true
// const p1 = new Polindrome2('abba'); //true
const p1 = new Polindrome2(1234321); //true
console.log(p1.isPolindrome());
