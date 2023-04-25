class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}

	get length() {
		return 1 + (this.next ? this.next.length : 0);
	}

	print() {
		return `(${this.value}) -> ${this.next ? this.next.print() : "null"}`
	}

	printValue() {
		return `${this.value}`;
	}

	setNext(next) {
		this.next = next;
	}

	findAt(index) {
		if(index === 0) {
			return this;
		} else {
			return this.next.findAt(index - 1);
		}
	}

	contains(value) {
		if(this.value === value) {
			return true;
		} else {
			return this.next ? this.next.contains(value) : false;
		}
	}

	equals(value) {
		if(this.value === value) {
			return this;
		} else {
			return this.next ? this.next.equals(value) : null;
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
		if(index >= this.size || index < 0) return null;

		return this.head.findAt(index);
	}

	pop() {
		this.tail = this.at(this.size - 2);
		const popped = this.tail.next;
		this.tail.setNext(null);
		return popped;
	}

	contains(value) {
		return this.head.contains(value);
	}

	find(value) {
		return this.head.equals(value);
	}

	insertAt(value, index) {
		const currentSize = this.size;
		if(index > currentSize) {
			console.error(`Cannot insert at index ${index} in a list of size ${currentSize}.`);
			return;
		}

		const node = new Node(value);
		const replacedNode = this.at(index);
		const replacedNodeParent = this.at(index - 1);

		node.setNext(replacedNode);

		if(replacedNode !== null) {
			this.tail = node;
		}
		
		if(replacedNodeParent !== null) {
			replacedNodeParent.setNext(node);
		} else {
			this.head = node;
		}
	}

	removeAt(index) {
		if(index < 0 || index > this.size) {
			console.error(`Cannot remove at index ${index}.`);
			return;
		}

		// The node being removed.
		const node = this.at(index);
		const nodeParent = this.at(index - 1);

		if(nodeParent === null) {
			// Replacing head.
			this.head = this.head.next;
		} else if (node.next === null) {
			// Replacing tail
			nodeParent.setNext(null);
			this.tail = nodeParent;
		} else {
			nodeParent.setNext(node.next);
		}
	}
}

const list = new LinkedList(1);
list.append(2);
list.prepend(3);

console.log("Starting List:\n", list.printList());

console.log("List Size:\n", list.size);
console.log("The value at index of 2:\n", list.at(2));

console.log("Popped Value\n", list.pop());
console.log("New List\n", list.printList());

console.log("This contains the value 1?\n", list.contains(1));

console.log("Get the Node with the value of 1:\n", list.find(1));

list.insertAt(4, 0);
list.insertAt(5, 3);
list.insertAt(6, 1);

console.log("List Post Insert Ats:\n", list.printList());

list.removeAt(0);
list.removeAt(3);

console.log("List After Removing at Index 0 and 3:\n", list.printList());