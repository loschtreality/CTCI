// Given two (singly) linked lists, determine if the two lists intersect.
// Return the intersecting node. Note that the intersection is defined based
// on the reference, not value. That is, if the kth node of the first
// linked list is the exact same node (by reference) as the jth node of the
// second linked list, then they are intersecting

const SingleNode = require('./linked_list')

// Ideas:

  // 1. The last node in one of the list is going to have to be the interseciton point,
  // since a node can't have more than one 'next' value.
  // Therefore, I'll need to grab the ID of the last node in one list and see if it
  // occurs in the other

const intersection = (list_one, list_two) => {
  let has_intersection = false
  let list_one_last = list_one
  let list_two_last = list_two

  // Grab last nodes
  while (list_one_last.next) {
    if (list_one_last.next.next) {
      list_one_last = list_one_last.next.next
    } else {
      list_one_last = list_one_last.next
    }
  }

  while (list_two_last.next) {
    if (list_two_last.next.next) {
      list_two_last = list_two_last.next.next
    } else {
      list_two_last = list_two_last.next
    }
  }

  // Loop through individual lists and check for inclusion of last node

  let runner_one = list_one
  let runner_two = list_two

  while (runner_one) {
    if (runner_one === list_two_last) {
      has_intersection = true
      break
    }
    runner_one = runner_one.next
  }

  while (runner_two) {
    if (runner_two === list_one_last) {
      has_intersection = true
      break
    }
    runner_two = runner_two.next
  }

  return has_intersection
}

const a = new SingleNode(1)
const b = new SingleNode(2)
const c = new SingleNode(3)
const d = new SingleNode(4)

a.next = b
b.next = c
c.next = d

const e = new SingleNode(5)
const f = new SingleNode(6)
const g = new SingleNode(7)


e.next = f
f.next = g
g.next = c // link to C

console.log(intersection(a, e))
