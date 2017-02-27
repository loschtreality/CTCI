// Write code to remove duplicates from an unsorted linked list
// FOLLOW UP:
// How would you solve this problem if a temporary buffer is not allowed

const { SingleNode } = require('./linked_list');


const remove_dups = (head) => {
  const seen_values = new Set()
  let node = head
  let prev_node = null

  while (node) {
    if (seen_values.has(node.value)) {
      prev_node.next = node.next
    } else {
      seen_values.add(head.value)
      prev_node = node
    }
    node = node.next
  }

  return head
}

const remove_dups_no_buff = (head) => {
  let current = head

  while (current) {
    let runner = current
    while (runner.next) {
      if (runner.next.value == current.value) {
        runner.next = runner.next.next
      } else {
        runner = runner.next
      }
    }
    current = current.next
  }

  return head
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

// remove_dups(a)
remove_dups_no_buff(a)
console.log(a.print_values())

module.exports = remove_dups
