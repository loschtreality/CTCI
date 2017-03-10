// Implement a function to check if a binary tree is balanced. For the purpose
// of this question, a balanced tree is defined such that the heights of the two
// subtrees of any node differby more than one

// Questions:
// Are the tree elements in order?

// Ideas:
// Use depth first search and count to find the height of the left and right
  // sides of a tree. If the counts are within 1 level, return true if the left
  // and right heights are within 1 of each other

// Use keep two pointers, one at the left tree and the other at the right.
  // Run a while loop until one of the pointers hits a null value. Check to see
  // Non-null pointer has another level it can move to. If so, return false, else
  // true

// If this is a BST, keep a count of the number of left nodes on the left
  // and the left nodes on the right. Compare the nodes when each side
  // hits a base

// Complexities
  // Time: o(n)
  // Space: o(n) due to having to temporarily store the function stacks

//NOTE: For this exercise, I'm going to assume that the tree is NOT a BST
  // therefore I'm going with option 1, else I'd do option 3

const minimalTree = require('./minimal_tree');

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const checkBalanced = (root) => {
  const diff = Math.abs(getLevelCounts(root.left) - getLevelCounts(root.right))
  return diff <= 1
}

const getLevelCounts = (root) => {
  let leftTotal = 1
  let rightTotal = 1
  if (!root.left && !root.right) return 1

  if (root.left) {
    leftTotal += getLevelCounts(root.left)
  }

  if (root.right) {
    rightTotal += getLevelCounts(root.right)
  }

  return Math.max(leftTotal, rightTotal)
}

const tree = minimalTree([1,2,3,4,5,6,7])
console.log(checkBalanced(tree))


const unbalancedTree = new Node(1)
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')
const h = new Node('h')

unbalancedTree.left = a
unbalancedTree.right = b

a.left = c
a.right = d
c.left = e
c.right = f
e.left = g
e.right = h

console.log(checkBalanced(unbalancedTree))
