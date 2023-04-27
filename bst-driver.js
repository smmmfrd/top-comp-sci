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
console.log(arr);