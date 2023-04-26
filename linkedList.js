class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  // Recursively gets the length of the node chain
  get length() {
    return 1 + (this.next ? this.next.length : 0);
  }

  // Recursively prints the node chain
  print() {
    return `(${this.value}) -> ${this.next ? this.next.print() : "null"}`
  }

  // Just returns this node's value.
  printValue() {
    return `${this.value}`;
  }

  // Method to set the this node's next value.
  setNext(next) {
    this.next = next;
  }

  // Recursive function that finds what is at the index.
  // The LinkedList class ensures the value is fine.
  findAt(index) {
    if (index === 0) {
      // If the index is 0, it's us!
      return this;
    } else {
      // Otherwise go down the chain again, but minus one.
      return this.next.findAt(index - 1);
    }
  }

  // Recursive function that finds the node with the passed value.
  // Returns true if there is a node with the value, false if not.
  contains(value) {
    if (this.value === value) {
      // It's us!
      return true;
    } else {
      // Escape clause.
      return this.next ? this.next.contains(value) : false;
    }
  }

  // Recursive function that finds the node with the passed value.
  // Returns the node with the value, if not found returns null.
  equals(value) {
    if (this.value === value) {
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

  // Returns the value from the recursion to get the length of the list.
  get size() {
    return this.head.length;
  }

  // Returns the value from the recursion to print the entire list.
  printList() {
    return this.head.print();
  }

  // Just prints the head and tail values.
  printHeadTail() {
    return `${this.head.printValue()}, ..., ${this.tail.printValue()}`;
  }

  // Adds value to end of list.
  append(value) {
    const node = new Node(value);
    this.tail.setNext(node);
    this.tail = node;
  }

  // Adds value to beginning of list.
  prepend(value) {
    const node = new Node(value);
    node.setNext(this.head);
    this.head = node;
  }

  // Returns node at given index.
  at(index) {
    if (index >= this.size || index < 0) return null;

    return this.head.findAt(index);
  }

  // Returns and removes Node at end of list.
  pop() {
    this.tail = this.at(this.size - 2);
    const popped = this.tail.next;
    this.tail.setNext(null);
    return popped;
  }

  // Returns true if value is in the list, false if not.
  contains(value) {
    return this.head.contains(value);
  }

  // Returns the index of the node with the given value, or null if not found.
  find(value) {
    return this.head.equals(value);
  }

  // Inserts the value at the given index.
  insertAt(value, index) {
    const currentSize = this.size;
    if (index > currentSize) {
      console.error(`Cannot insert at index ${index} in a list of size ${currentSize}.`);
      return;
    }

    const node = new Node(value);
    const replacedNode = this.at(index);
    const replacedNodeParent = this.at(index - 1);

    node.setNext(replacedNode);

    if (replacedNode !== null) {
      this.tail = node;
    }

    if (replacedNodeParent !== null) {
      replacedNodeParent.setNext(node);
    } else {
      this.head = node;
    }
  }

  // Removes the node at the given index.
  removeAt(index) {
    if (index < 0 || index > this.size) {
      console.error(`Cannot remove at index ${index}.`);
      return;
    }

    // The node being removed.
    const node = this.at(index);
    const nodeParent = this.at(index - 1);

    if (nodeParent === null) {
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

// Create the list
const list = new LinkedList(1);

// Add some values
list.append(2);
list.prepend(3);

// Display our starting list: (3) -> (1) -> (2) -> null
console.log("Starting List:\n", list.printList());

// Check both our most important methods are working
console.log("List Size:\n", list.size);
console.log("The value at index of 2:\n", list.at(2));

// Utilize the pop method and show the list afterwards.
console.log("Popped Value\n", list.pop());
console.log("New List\n", list.printList());

// See if the list contains a specific value.
console.log("This contains the value 1?\n", list.contains(1));

// Get the node with a specific value.
console.log("Get the Node with the value of 1:\n", list.find(1));

// Utilize list methods to increase complexity
list.insertAt(4, 0);
list.insertAt(5, 3);
list.insertAt(6, 1);

console.log("List Post Insert Ats:\n", list.printList());

// Remove some nodes
list.removeAt(0);
list.removeAt(3);

console.log("List After Removing at Index 0 and 3:\n", list.printList());