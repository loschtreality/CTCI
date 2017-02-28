// Implement an algorithm to delete a node in the middle (i.e any
// node but the first and last node, not necessarily the exact middle) of
// a singly linked list, given only access to that node

// Example:

// Input: the node c from the LL a -> b -> c -> d -> e -> f

// Result: nothing is returned but the new LL looks like a -> b -> d -> e -> f


const SingleNode = require('./linked_list');

const delete_mid = (node) => {
  if (!node || !node.next) { return false }

  let next = node.next
  node.value = next.value
  node.next = next.next

  return true
}


const a = new SingleNode(1)
const b = new SingleNode(5)
const c = new SingleNode(1)
const d = new SingleNode(3)
const e = new SingleNode(5)
const f = new SingleNode(7)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f


delete_mid(c)
a.print_values()
