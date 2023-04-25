class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}

	get length() {
		return 1 + (this.next ? this.next.length : 0);
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

	get size() {
		return this.head.length;
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

	prepend(value) {
		const node = new Node(value);
		node.setNext(this.head);
		this.head = node;
	}
}

const list = new LinkedList(1);
list.append(2);
list.prepend(3);

console.log(list.printList());
console.log(list.size);