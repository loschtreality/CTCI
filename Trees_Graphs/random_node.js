// You are implementing a binary tree class from scratch, which, in additon
// to insert, find, and delete, has a method getRandomNode() which returns a random
// node from the tree. All nodes should be equally likely to be chosen. Design and
// implement an algorithm for getRandomNode, and explain how you would implement
// the rest of the methods

// Clarifications:
// Is there a limit as to how much time or space complexity is required?
// Must this Binary Tree maintain the properties of a binary search tree?
// Must the tree be balanced?

// Ideas
// Assuming there is no limit on space and that the tree is NOT a BST,
// a hash of node references and an array of nodes can be used to implement
// these methods. Values will have to be updated in the tree as well as the
// referencing data structures.


// Complexities

  // This data structure requires o(2n) space

  // getRandomNode
  // Time: o(1)
  // Space: o(1)

  // find
  // Time: o(1)
  // Space: o(1)

  // find (callback)
  // Time: o(log n)
  // Space: o(n)

  // delete
  // Time: o(log n)
  // Space: o(1)

  // insert
  // Time: o(log n)
  // Space: o(1)

class BinaryTree {
  constructor(root) {
    this.root = root
    this.nodes = [root]
    this.length = 1
    this.cache = {
      [root.value]: {
        node: root,
        position: 0
      }
    }
  }

  getRandomNode() {
    const random = Math.trunc(Math.random() * this.length + 1)
    return this.nodes[random]
  }

  insert(node) {
    // Insert into tracking structures
    this.nodes.push(node)
    this.cache[node.value] = {
      node,
      position = this.length
    }
    this.length++

    // Insert into tree
    let parentNode;
    if (node.value > this.root.value) {
      parentNode = this.find(node.value, (target) => {
        return target.value > node.value;
      })
    } else {
      parentNode = this.find(node.value, (target) => {
        return target.value < node.value
      })
    }

    if (!parentNode.left) {
      parentNode.left = node
    } else if (!parentNode.right) {
      parentNode.right = node
    } else if (node.value > parentNode.left.value && node.value < parentNode.right.value){
      let temp = parentNode.left
      parentNode.left = node
      node.left = temp
    } else {
      let temp = parentNode.right
      parentNode.right = node
      node.left = temp
    }

  }

  find(nodeValue, callback) {
    if (!callback) {
      const node = Reflect.get(this.cache, nodeValue)
      return node ? node : null
    }

    // Run callback to find appropriate node
    let left = 0
    let right = this.length - 1
    let midPoint = Math.floor(this.length / 2)
    let runner = this.cache[midPoint]

    while (left < right) {
      if (callback(nodeValue, runner)) return runner

      nodeValue > runner.value ? left = midPoint + 1 : right = midPoint - 1

      midPoint = right - left
      runner = this.cache[midPoint]

    }

    return null
  }

  delete(node) {
    // find reference in array via hash, delete by swapping node with last
    // element and popping.
    const reference = Relfect.get(this.cache, node.value)

    let temp = this.nodes[this.length - 1]
    this.nodes[this.length - 1] = this.nodes[reference.location]
    this.nodes[reference.location] = temp

    // Update the out of order value's index in hash
    this.cache[temp.value].locaiton = reference.location

    this.nodes.pop()

    // delete elment in binary tree and move children to parent if necessary
    const parent = this.find(referene.value, (parentNode) => {
      if (parentNode.left.value === reference.value) {
        return parentNode
      } else if (parentNode.right.value === reference.value) {
        return parentNode
      }
    })

    //case: Account for root being the deletion node


    //case: If there are no children, delete the node
    if (!reference.right && !reference.left) {
      if (parent.left.value === node.value) {
        parent.left = null
      } else {
        parent.right = null
      }
    }

    //case: If the node has children, move children to parent


  }
} // <-- End of class

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}


const root = Reflect.construct(Node, 45)
const BT = Reflect.construct(BinaryTree, root)

console.log(BT)
