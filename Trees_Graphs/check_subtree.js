// T1 and T2 are two very large binary trees, with T1 much bigger than T2
// Create an algorithm to determine if T2 is a subtree of T1

// A tree T2 is a subtree of T1 if there exists a node n in T1 such that
// the subtree of n is identical to T2. That is, if you cut off the tree
// at node n, the two trees would be identical


// Clarifications:
// Does each node have a link to its parent?
// Do both trees contain unique values?
// What should the return value be? T/F or the node at which they are the same?

// Ideas:
  // BFS to find root node of the smaller binary tree. Run a double DFS
  // to check that each node matches up to each other. Going to assume
  // that each tree has respective unique values. Else the object ID and value
  // would be stored in doing searches

// Complexities:
  // Time: o(n log n) <-- finding node and double searching
  // Space: o(n) <-- storing nodes in queue / stack

const { BSTNode, bstWithParent, ModifedBSTNode } = require('./graph')

const checkSubtree = (largeBT, smallBT) => {
  const matchingNode = bfs(largeBT, smallBT)
  if (!matchingNode) return false

  return doubleDFCompare(matchingNode, smallBT)
}

const doubleDFCompare = (rootLarge, rootSmall) => {
  if (!rootLarge && !rootSmall) return true
  if (rootLarge.value !== rootSmall.value) return false

  const left = doubleDFCompare(rootLarge.left, rootSmall.left)
  const right = doubleDFCompare(rootLarge.right, rootSmall.right)

  return left && right
}

const bfs = (root, target) => {
  const seenNodes = new Set()
  let nodeQueue = [root]

  while (nodeQueue.length > 0) {
    const currentNode = nodeQueue.shift()

    if (!currentNode) continue
    if (currentNode === target) return currentNode

    if (!seenNodes.has(currentNode.value)) {
      seenNodes.add(currentNode.value)
      nodeQueue = [...nodeQueue, currentNode.left, currentNode.right]
    }

  }

  return null
}


const largeBT = new ModifedBSTNode(48)
const alpha = new ModifedBSTNode(35)
const bravo = new ModifedBSTNode(91)
const charlie = new ModifedBSTNode(21)
const delta = new ModifedBSTNode(55)
const echo = new ModifedBSTNode(92)
const foxtrot = new ModifedBSTNode(11)
const golf = new ModifedBSTNode(29)
const hotel = new ModifedBSTNode(77)
const inda = new ModifedBSTNode(71)

largeBT.left = alpha
largeBT.right = bravo
alpha.parent = largeBT
bravo.parent = largeBT

alpha.left = charlie
charlie.parent = alpha

charlie.left = foxtrot
charlie.right = golf
foxtrot.parent = charlie
golf.parent = charlie

bravo.left = delta
bravo.right = echo
delta.parent = bravo
echo.parent = bravo

delta.right = hotel
hotel.parent = delta

hotel.left = inda
inda.parent = hotel


// connect subtree
// inda.left = bstWithParent

console.log(checkSubtree(largeBT, bstWithParent)) // true
