# top-comp-sci
The Odin Project's Computer Science Assignments.


A redo of this assignment, as I lost it before making a repository for it.

# Description
Each of the files does it's algorithm, just printing it out to the console on run.

## Linked List - linkedList.js
[Link to assignment](https://www.theodinproject.com/lessons/javascript-linked-lists)
A fully functional Linked List in Javascript.
To use run linkedList.js, then the console logs:

```
Starting List:
 (3) -> (1) -> (2) -> null
List Size:
 3
The value at index of 2:
 Node { value: 2, next: null }
Popped Value
 Node { value: 2, next: null }
New List
 (3) -> (1) -> null
This contains the value 1?
 true
Get the Node with the value of 1:
 Node { value: 1, next: null }
List Post Insert Ats:
 (4) -> (6) -> (3) -> (1) -> (5) -> null
List After Removing at Index 0 and 3:
 (6) -> (3) -> (1) -> null
```
## Binary Search Tree - binarySearchTree.js & bst-driver.js
[Link to assignment](https://www.theodinproject.com/lessons/javascript-binary-search-trees)
A fully functional Binary Search Tree implementation in Javascript.
binarySearchTree.js - Contains the algorithms
bst-driver.js - Has a demonstration, when ran it assembles a Binary Search Tree starting from random values, then adds higher values in to make it unbalanced, which it then fixes.

When ran, the console logs (random list was used here):
```
New Binary Search Tree:
│           ┌── 16
│       ┌── 15
│   ┌── 13
│   │   └── 10
└── 9
    │       ┌── 6
    │   ┌── 5
    └── 2
        └── 0
The tree is balanced?:  true
Level Order [
   9,  2, 13,  0, 5,
  10, 15,  6, 16
]
Pre Order [
   9,  2,  0,  5, 6,
  13, 10, 15, 16
]
In Order [
   0,  2,  5,  6, 9,
  10, 13, 15, 16
]
Post Order [
   0,  6,  5, 2, 10,
  16, 15, 13, 9
]
Well then, here's some added numbers.
│                               ┌── 24
│                           ┌── 22
│                       ┌── 21
│                   ┌── 20
│               ┌── 18
│           ┌── 16
│       ┌── 15
│   ┌── 13
│   │   └── 10
└── 9
    │       ┌── 6
    │   ┌── 5
    └── 2
        └── 0
Is the new tree balanced?:  false
Balancing tree...
│           ┌── 24
│       ┌── 22
│       │   └── 21
│   ┌── 20
│   │   │   ┌── 18
│   │   └── 16
│   │       └── 15
└── 13
    │       ┌── 10
    │   ┌── 9
    │   │   └── 6
    └── 5
        │   ┌── 2
        └── 0
Is the new tree balanced?:  true
Level Order [
  13,  5, 20,  0,  9, 16,
  22,  2,  6, 10, 15, 18,
  21, 24
]
Pre Order [
  13,  5,  0,  2,  9,  6,
  10, 20, 16, 15, 18, 22,
  21, 24
]
In Order [
   0,  2,  5,  6,  9, 10,
  13, 15, 16, 18, 20, 21,
  22, 24
]
Post Order [
   2,  0,  6, 10,  9,  5,
  15, 18, 16, 21, 24, 22,
  20, 13
]
```