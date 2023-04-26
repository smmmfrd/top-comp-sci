class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // A recursive print function provided by The Odin Project
  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  buildTree(arr) {
    // Remove Duplicates
    const cleanArr = [...new Set(arr)];

    // Sort arr
    const sortedArr = cleanArr.sort((a,b) => a - b);

    // Build tree
    return this.createTree(sortedArr, 0, sortedArr.length - 1);
  }

  createTree(array, start, end) {
    if(start > end) return null;

    let mid = (start + end) / 2;
    // console.log(`Middle Index ${mid}: ${array[mid]}`);
  }
}

const tree = new Tree();

tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 6]);

tree.prettyPrint();