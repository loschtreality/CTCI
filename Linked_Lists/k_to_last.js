// Implement an algorithm to find the kth to last element of a singly linked list

const SingleNode = require('./linked_list');

const kth_to_last = (head, k) => {
  let current = head
  let runner = head

  while (k > 0) {
    runner = runner.next
    k--
  }

  if (!runner) { return new Error('k value too high') }

  while (runner) {
    runner = runner.next
    current = current.next
  }

  return current.value
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

console.log(kth_to_last(a, 5))
