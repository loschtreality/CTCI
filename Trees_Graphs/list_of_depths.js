// Given a binary tree, design an algorithm which creates a linked list of
// all the nodes at each depth (e.g if you have a tree with depth D, you'll have D linked lists)

// Ideas:
// Use bredth first build to push nodes into linked list

// Question:
// Single or double linked list?
// Return separate lists or one long, connected list?

// Complexity:
  // Time: o(n)
  // Speace: o(n)

const LinkNode = require('../Linked_Lists/linked_list')
const minimalTree = require('./minimal_tree');

const listOfDepths = (root) => {
  const linkedList = new LinkNode(root.value)
  const nodeQueue = [root.left, root.right]
  let tail = linkedList

  while (nodeQueue.length > 0) {
    const currentNode = nodeQueue.shift()
    if (currentNode === null)  continue

    nodeQueue.push(currentNode.left, currentNode.right)

    tail.next = new LinkNode(currentNode.value)
    tail = tail.next
  }

  return linkedList
}
//
const tree = minimalTree([1,2,3,4,5,6,7]) // in order tree
const oo_tree = minimalTree([7,1,2,6,3,5,4]) // in out of order tree

listOfDepths(tree).print_values()
listOfDepths(oo_tree).print_values()
