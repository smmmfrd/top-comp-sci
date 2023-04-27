class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  setLeft(node) {
    this.left = node;
  }

  setRight(node) {
    this.right = node;
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
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);

    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  buildTree(arr) {
    // Remove Duplicates
    const cleanArr = [...new Set(arr)];

    // Sort arr
    const sortedArr = cleanArr.sort((a,b) => a - b);

    // Build tree
    this.root = this.createTree(sortedArr, 0, sortedArr.length - 1);
  }

  createTree(array, start, end) {
    if(start > end) return null;

    let mid = Math.floor((start + end) / 2);

    const root = new Node(array[mid]);
    root.setLeft(this.createTree(array, start, mid - 1));
    root.setRight(this.createTree(array, mid + 1, end));

    return root;
  }

  insert(value, root = this.root) {
    if(root === null) {
      root = new Node(value);
      return root;
    }

    if(value < root.value) {
      root.left = this.insert(value, root.left);
    } else {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  delete(value, root = this.root) {
    if(root === null) return root;

    if(value < root.value) {
      root.left = this.delete(value, root.left);
      return root;
    } else if (value > root.value){
      root.right = this.delete(value, root.right);
      return root;
    }

    // We only get here if this is the value to be deleted.
    
    if(root.left === null) {
      var temp = root.right;
      return temp;
    } else if(root.right === null) {
      var temp = root.left;
      return temp;
    } else {
      // Two children exist.
      var parent = root;

      // Find successor
      var succ = root.right;
      
      while(succ.left !== null) {
        parent = succ;
        succ = succ.left;
      }

      if(parent.value != root.value) {
        parent.left = succ.right;
      } else {
        parent.right = succ.right;
      }

      root.value = succ.value;

      return root;
    }
  }

  find(value, root = this.root) {
    if(root.value === value) {
      return root;
    }

    if(value < root.value) {
      return this.find(value, root.left);
    } else {
      return this.find(value, root.right);
    }
  }

  levelOrder() {
    if(this.root === null) return [];

    const queue = [this.root];
    const res = [];
    while (queue.length > 0) {
      let n = queue.shift();
      res.push(n.value);
      if(n.left) {
        queue.push(n.left);
      }
      if(n.right) {
        queue.push(n.right);
      }
    }

    return res;
  }

  preorder(root = this.root, res = []) {
    if(root === null) return [];

    res.push(root.value);
    res = [...res, ...this.preorder(root.left)];
    res = [...res, ...this.preorder(root.right)];

    return res;
  }

  inorder(root = this.root, res = []) {
    if(root === null) return [];

    res = [...res, ...this.preorder(root.left)];
    res.push(root.value);
    res = [...res, ...this.preorder(root.right)];

    return res;
  }

  postorder(root = this.root, res = []) {
    if(root === null) return [];

    res = [...res, ...this.preorder(root.left)];
    res = [...res, ...this.preorder(root.right)];
    res.push(root.value);

    return res;
  }
}

const tree = new Tree();

tree.buildTree([1, 2, 3, 5, 6]);
tree.prettyPrint();

// tree.insert(7);
// tree.insert(4);
// tree.delete(3);
// console.log(tree.find(3));
// console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());