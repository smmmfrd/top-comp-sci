class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}

	print() {
		return `${this.value}${this.next ? ", " + this.next.print() : "."}`
	}

	printValue() {
		return `${this.value}`;
	}

	setNext(next) {
		this.next = next;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
	}

	printList() {
		return this.head.print();
	}

	printHeadTail() {
		return `${this.head.printValue()}, ..., ${this.tail.printValue()}`;
	}

	append(value) {
		const node = new Node(value);
		this.tail.setNext(node);
		this.tail = node;
	}
}

const list = new LinkedList(1);
list.append(2);

console.log(list.printList());