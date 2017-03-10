// Given a sorted (increasing order) array with unique integer elements, write
// an algorithm to create a binary search tree with minimal height

// Clarifications
// Should the tree be returned as an array or class object?
// Can the array have a null value as the first element?

// Ideas
// Build a bst by using the indexing algorithm: leftChild = index * 2, rightChild = left + 1
  // Utilize a queue to do a "bredth first build"

// Complexities
  // Time: o(n)
  // Space: o(n)

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }

  printTree() {
    const printQueue = [this]

    while (printQueue.length > 0) {
      const currentNode = printQueue.shift()
      if (currentNode.left && currentNode.right) {
        printQueue.push(currentNode.left, currentNode.right)
      } else if (currentNode.left && !currentNode.right) {
        printQueue.push(currentNode.left)
      } else if(!currentNode.left && currentNode.right) {
        printQueue.push(currentNode.right)
      }
      console.log(currentNode.value)
    }
  }

}

const minimalTree = (array) => {
  array.unshift(null) // place null in beginning of array to properly index and build tree
  const treeTop = new Node(array[1])
  let rootOrder = [treeTop]

  for (let index = 1, len = array.length; index < len; index++) {
    const currentRoot = rootOrder.shift()

    const leftIndex = index * 2
    const rightIndex = index * 2 + 1

    if (leftIndex < len) {
      currentRoot.left = new Node(array[leftIndex])
    }

    if (rightIndex < len) {
      currentRoot.right = new Node(array[rightIndex])
    }

    rootOrder = [...rootOrder, currentRoot.left, currentRoot.right]

  }

  return treeTop
}

const uniqueArray = [1,2,3,4,5,6,7]
// console.log(minimalTree(uniqueArray))

module.exports = minimalTree
