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

	find(index) {
		if(index === 0) {
			return this;
		} else {
			return this.next.find(index - 1);
		}
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

	at(index) {
		if(index > this.size) return -1;

		return this.head.find(index);
	}
}

const list = new LinkedList(1);
list.append(2);
list.prepend(3);

// console.log(list.printList());
// console.log(list.size);
console.log(list.at(2));