// Design an algorithm and write code to find the first common ancestor
// of two nodes in a binary tree. Avoid storing additional nodes in a data
// structure.

// NOTE: This is not necessarily a binary search tree

// Clarifications:
// 1. Will the nodes be on opposite side of the binary tree?
// 2. If a direct parent and child are selected, should the "grandparent"
  // node be selected or should the parent be returned?
// 3. Will I ever be given two inputs referring to the same node?
// 4. Are all entries in the tree unique?
// 5. Do the nodes have a reference to their parent?
// 6. How should I handle the case in which the root node gets passed in?
// 7. Nodes can't be stored in an additional data strcture, but can the IDs
  // of each object be stored in a set?
// 8. Will I be given the root node as an input?
// 9. Will the root node always have a left and right child?
// 10. Will the nodes given always be present somewhere in the tree?

// Ideas:
// Assuming there could be duplicate node values in the tree, the object IDs
  // will have to be compared. If additional data strctures aren't permitted,
  // both nodes would have to be checked to see if they are on the same side
  // of the tree. If they are NOT on the same side, the root node can be returned.

// In the case where there is no parent, a bredth first search can be conducted to
  // find the location of the first node. When the first node is found, a depth first
  // search can be conducted from that point. If the second node is found in the children
  // of the first, then the parent of the first node can be returned (the parent will have
  // to be stored in a variable). If the child isn't found, then the root node can be returned
  // assuming the node exists in the tree. If both the first and second node have the same parent,
  // the grandparent can be returned


// Complexities:
  // With parent
    // Time: o(log n)
    // Space: o(1)

  // Without parent
    // Time: o()
    // Space: o()


const { BSTNode, ModifedBSTNode } = require('./graph')

// Solution without connection to parent
const firstCommonAncestor = (root, nodeOne, nodeTwo) => {

}


// Solution with connection to parent
const fca = (nodeOne, nodeTwo) => {
  if (!nodeOne || !nodeTwo) return Error("Must input two valid nodes")

  // If the root node gets passed in
  if (!nodeOne.parent) return nodeOne
  if (!nodeTwo.parent) return nodeTwo

  let heightOne = getHeight(nodeOne)
  let heightTwo = getHeight(nodeTwo)

  let nodeOneRef = moveUp(nodeOne, heightTwo - heightOne)
  let nodeTwoRef = moveUp(nodeTwo, heightOne - heightTwo)

  while (nodeOneRef !== nodeTwoRef) {
    nodeOneRef = nodeOneRef.parent
    nodeTwoRef = nodeTwoRef.parent
  }

  return nodeOneRef.value
}

const getHeight = (node) => {
  let count = 0

  while (node) {
    node = node.parent
    ++count
  }

  return count
}

const moveUp = (node, count) => {
  for (let i = count;  i > 0; --i) {
    node = node.parent
  }
  return node
}

const bstWithParent = new ModifedBSTNode(48)
const alpha = new ModifedBSTNode(35)
const bravo = new ModifedBSTNode(91)
const charlie = new ModifedBSTNode(21)
const delta = new ModifedBSTNode(55)
const echo = new ModifedBSTNode(92)
const foxtrot = new ModifedBSTNode(11)
const golf = new ModifedBSTNode(29)
const hotel = new ModifedBSTNode(77)
const inda = new ModifedBSTNode(71)

bstWithParent.left = alpha
bstWithParent.right = bravo
alpha.parent = bstWithParent
bravo.parent = bstWithParent

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

const tree = bstWithParent
console.log(fca(foxtrot, hotel)) // Root Node (bstWithParent)
// console.log(firstCommonAncestor(delta, india)) // Bravo
// console.log(firstCommonAncestor(charlie, foxtrot)) // Alpha
// console.log(firstCommonAncestor(delta, echo)) // Bravo
