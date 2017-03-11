// Write an algorithm to find the "next" node (i.e, in-order successor) of a
// given node in a binary search tree. You may assume that each node has a link to its parent

// Clarifications:
// Will I always be given a valid BST?
// Can the input node be anywhere in the tree?
// Should the node or the value be returned?

// Ideas
  // Create filter function which takes in a root node and a value to do a in-order search. When a proper
  // successor is reached, return that node / value. If no successor is reached,
  // Must account for the root node being passed in, in which case the parent would be null
  // Successor is the node which is less <= input node and less than the parent node if it exists

// Complexitites
  // Time: o(n)
  // Space: o(n)

const { BSTNode } = require('./graph')

// Add attribute to have a connection to parent

class ModifedBSTNode extends BSTNode {
  constructor(value) {
    super(value)
    this.parent = null
  }
}

const successor = (originalNode) => {
  return inOrderCallback(originalNode, (node) => {
    if (originalNode.parent === null) {
      return node.value <= originalNode.value
    } else {
      return (node.value <= originalNode.value) && (node.value < originalNode.parent.value)
    }
  })
}

const inOrderCallback = (originalNode, callback) => {

  if (originalNode.left) {
    return inOrderCallback(originalNode.left, callback)
  }


  if (originalNode.right) {
    return inOrderCallback(originalNode.right, callback)
  }

  if (callback(originalNode)) return originalNode.value

  return null
}

const a = new ModifedBSTNode(48)
const b = new ModifedBSTNode(35)
const c = new ModifedBSTNode(91)
const d = new ModifedBSTNode(21)
const e = new ModifedBSTNode(55)
const f = new ModifedBSTNode(92)
const g = new ModifedBSTNode(11)
const h = new ModifedBSTNode(29)
const i = new ModifedBSTNode(77)
const j = new ModifedBSTNode(71)

a.left = b
a.right = c
b.parent = a
c.parent = a

b.left = d
d.parent = b

d.left = g
d.right = h
g.parent = d
h.parent = d

c.left = e
c.right = f
e.parent = c
f.parent = c

e.right = i
i.parent = e

i.left = j
j.parent = i

// Deep successor case
console.log(successor(b)) // Node G --> 11

// Left child case
// console.log(successor(e)) // Node J --> 71

// Right child case
// console.log(successor(i)) // Node J --> 71

// Root node case
console.log(successor(a)) // Node G --> 11

// No successor case
console.log(successor(f)) // null
