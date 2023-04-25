class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}

	print() {
		return `${this.value}`;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
	}

	print() {
		return this.head.print();
	}
}

const list = new LinkedList(1);

console.log(list.print());