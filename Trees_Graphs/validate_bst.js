// Implement a function to check if a binary tree is a binary search tree

// Clarifications:
// Will the children ever be stored as something other than a left / right property such as an array?
// Will there be additional keys on each node?

// Ideas:
  // In a BST the child on the left is always less than the parent while the right is greater. Also, the left node is smaller than the right node. Recursively check each node's children to each other and each child to node value

// Complexities:
  // Time: o(h) where h is the height of the tree
  // space: o(h) where h is the height of the tree

const { BSTNode } = require('./graph');

const isBST = (root) => {
  if (root === null)  return true

  if ((root.right && root.left) && root.left.value > root.right.value) return false
  if (root.left && root.value > root.left.value) return false
  if (root.right && root.value > root.right.value) return false

  return isBST(root.left) && isBST(root.right)
}

const notBst = new BSTNode(1)
const a = new BSTNode(2)
const b = new BSTNode(3)
const c = new BSTNode(4)
const d = new BSTNode(6)
const e = new BSTNode(5)
const f = new BSTNode(8)
const g = new BSTNode(7)

notBst.left = a
notBst.right = f
f.right = g
a.left = b
a.right = c
c.right = d
d.right = e

const BST = new BSTNode(4)
const h = new BSTNode(5)
const i = new BSTNode(6)
const j = new BSTNode(7)
const k = new BSTNode(8)
const l = new BSTNode(9)
const m = new BSTNode(10)

BST.left = h
BST.right = i
h.left = j
h.right = k
i.left = l
i.right = m


// BST.printTree()
console.log(isBST(BST)) // true
console.log(isBST(notBst)) // false
