// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop

// Definition
  // Circular linked list - A (corrupt) linked list in which a node's next
  // pointer points to an earlier node, so as to make a loop in the linked list

// Example:
  // Input a -> b -> c -> d -> e -> c
  // Output c

const SingleNode = require('./linked_list')

const detect_loop = (list) => {
  let tortoise = list
  let hare = list.next

  while (hare) {
    if (hare === tortoise) { return tortoise }

    hare = hare.next.next
    tortoise = tortoise.next
  }

  return false
}


const a = new SingleNode(1)
const b = new SingleNode(5)
const c = new SingleNode(1000) // circular value
const d = new SingleNode(3)
const e = new SingleNode(5)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = c

console.log(detect_loop(a))
