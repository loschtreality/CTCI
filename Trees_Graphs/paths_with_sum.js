// You are given a binary tree in which each node contains an integer value
// (which might be positive or negative). Design an algorithm to count the
// number of paths that sum to a given vialue. The path does not need to start
// or end at the root or a leaf, but it must go downwards (traveling from parent to child)


// Clarifications:
// If a single node hold the same value as the target sum, can that be considered a path?

// Ideas:
// Do a DFS on the tree starting at the root node and push the node values into a queue.
// Keep a running total of the current path. If the sum equals the number, incriment the count.
// When the path reaches a leaf node, shift the queue and subtract that number from the total.
// If the total is hit, incriment the total. If it falls below the total return 0.
// Return the total count

// Complexities:
  // Time: o(n)
  // Space: o(n^2) <-- recursion stacks & queue space

// const { BSTNode, bstWithParent } = require('./graph')
// const pathsWithSum = (root, targetSum) => {
//   const sumsDown = []
//   let count = (
//     pathSumsDown(root.left, sumsDown, targetSum)
//    +
//     pathSumsDown(root.right, sumsDown, targetSum)
//  )
//  console.log(sumsDown)
//
//  if (root.value === targetSum) count++
//
//  count += pathSumsUp(root, sumsDown, targetSum)
//
//  return count
// }
//
// const pathSumsDown = (root, sumsDown, targetSum) => {
//   const seenValues = new Set()
//   let nodeStack = [root]
//   let sum = 0
//   let count = 0
//
//
//   while (nodeStack.length > 0) {
//     if (sum === targetSum) cout++
//     const currentNode = nodeStack.pop()
//
//     if (!currentNode) {
//       sumsDown.push(sum)
//       sum -= sumsDown[sumsDown.length - 1]
//     }
//
//     if (currentNode && !seenValues.has(currentNode.value)) {
//       seenValues.add(currentNode.value)
//       sum += currentNode.value
//
//       nodeStack.push(currentNode.left)
//       nodeStack.push(currentNode.right)
//     }
//   }
//
//   return count
// }
//
// const pathSumsUp = (root, sumsDown, targetSum) => {
//   const seenValues = new Set()
//   let nodeStack = [root.left, root.right]
//   let sum = sumsDown[0]
//   let count = 0
//
//   while (nodeStack.length > 0) {
//     const currentNode = nodeStack.pop()
//
//     if (!currentNode) {
//       sumsDown.shift()
//       sum = sumsDown[0]
//     }
//
//     if (currentNode && !seenValues.has(currentNode.value)) {
//       seenValues.add(currentNode.value)
//       sum -= currentNode.value
//
//       if (sum === targetSum) count++
//
//       nodeStack.push(currentNode.left)
//       nodeStack.push(currentNode.right)
//     }
//
//   }
//
//   return count
// }

const { BSTNode, bstWithParent } = require('./graph')

const pathsWithSum = (tree, value) => {
  if (!tree) {
    throw new Error("Tree must be valid and non-empty")
  }

  return findPathWithSumRecursive([], tree, value)
}

const findPathWithSumRecursive = (path, node, value) => {
  let count = 0
  if (node) {
    path.push(node.val)
    let sum = 0
    for (let i = path.length, len = 0; i > len; i--) {
      sum += path[i]
      if (sum === value) ++count
    }
    count += (
      findPathWithSumRecursive(path, node.left, value)
      +
      findPathWithSumRecursive(path, node.right, value)
    )
    path.pop()
  }
  return count
}

// console.log(bstWithParent)
console.log(pathsWithSum(bstWithParent, 104)) // 1
