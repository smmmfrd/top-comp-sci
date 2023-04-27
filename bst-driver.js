import { Tree } from "./binarySearchTree.js";

function randomNumbers(minLength, maxLength, maxIteration, startingValue = 0) {
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  const res = [startingValue + Math.floor(Math.random() * maxIteration)];
  for(let i = 1; i < length; i++) {
    res.push(res[i - 1] + 1 + Math.floor(Math.random() * maxIteration));
  }
  return res;
}

const arr = randomNumbers(7, 9, 3);
const tree = new Tree();
tree.buildTree(arr);
console.log("New Binary Search Tree:");
tree.prettyPrint();
console.log("The tree is balanced?: ", tree.isBalanced());

console.log("Level Order", tree.levelOrder());
console.log("Pre Order", tree.preOrder());
console.log("In Order", tree.inOrder());
console.log("Post Order", tree.postOrder());

console.log("Well then, here's some added numbers.");
randomNumbers(3, 5, 3, Math.max(...arr) + 1)
  .forEach(num => {
  tree.insert(num);
});
tree.prettyPrint();
console.log("Is the new tree balanced?: ", tree.isBalanced());

console.log("Balancing tree...");
tree.rebalance();
tree.prettyPrint();
console.log("Is the new tree balanced?: ", tree.isBalanced());

console.log("Level Order", tree.levelOrder());
console.log("Pre Order", tree.preOrder());
console.log("In Order", tree.inOrder());
console.log("Post Order", tree.postOrder());