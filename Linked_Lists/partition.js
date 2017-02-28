// Write code to partition a linked list around a value x, such that all nodes
// less than x come before all the nodes grater than or equal to . If x is contained
// within the list, the values of x only need to be after the elements less than x.
// The partition element x can appear anywhere in the "right partition";
// it does not need to appear between the left and right partitions


// Example:

// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]

// Output (any combo after 2): 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8


// Ideas:

// 1. Use a greater and less than stack. If the value is >= partition, push right, else left
  // Loop through less than stack, connecting the nodes. Then connect the last less than
  // node to the first greater than node. Keep connecting to the end of the array and return
  // list
// Time: o(n) space: o(n)

// 2. Store node values in a deque. Unshift if less than partition, push if greater. Loop through deque
  // and create a new linked list
// Time: o(n) space: o(n)

const SingleNode = require('./linked_list')

const partition = (head, partition) => {
  const greater_eq = []
  const less_than = []

  let current = head

  while (current) {
    if (current.value >= partition) {
      greater_eq.push(current)
    } else {
      less_than.push(current)
    }
    current = current.next
  }

  for (var i = 0; i < less_than.length - 1; i++) {
    less_than[i].next = less_than[i + 1]
  }

  // connect last node to first of greater
  less_than[less_than.length - 1].next = greater_eq[0]

  for (var i = 0; i < greater_eq.length - 1; i++) {
    greater_eq[i].next = greater_eq[i + 1]
  }

  greater_eq[greater_eq.length - 1].next = null


  return less_than[0]

}


const a = new SingleNode(3)
const b = new SingleNode(5)
const c = new SingleNode(8)
const d = new SingleNode(5)
const e = new SingleNode(10)
const f = new SingleNode(2)
const g = new SingleNode(1)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g

const result = partition(a, 5)
result.print_values()
