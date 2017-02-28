// Implement a function to check if a linked list is a palindrome

const SingleNode = require('./linked_list')

// Clarifications:
// 1. Is this list singly or doubly linked? - single
// 2. Should I choose to optimize for space or time?
// 3. Can the list be altered?

// Ideas:
// 1. Use tortise and hare technique to get mid point. Create a stack for the values.
//  From mid point, place elements into stack. Start other pointer at beginning of list, push values into array


const is_palindrome = (head) => {
  let palin_stack = []
  let runner = head
  let current = head
  let length = 1
  let palin_check = true

  while (runner.next) {
    if (runner.next.next) {
      runner = runner.next.next
      length += 2
    } else {
      runner = runner.next
      length++
    }
    current = current.next
  }

  runner = head
  length = Math.floor(length / 2)

  while (current) {
    palin_stack.push(current.value)
    current = current.next
  }

  while (length > 0) {
    if (runner.value !== palin_stack.pop()) palin_check = false
    length--
    runner = runner.next
  }

  return palin_check
}


// Even length palindrome

const a = new SingleNode('a')
const b = new SingleNode('b')
const c = new SingleNode('c')
const one = new SingleNode('c')
const two = new SingleNode('b')
const three = new SingleNode('a')

a.next = b
b.next = c
c.next = one
one.next = two
two.next = three

console.log('Even palindrome', is_palindrome(a))

// odd length palindrome

const d = new SingleNode('d')
const e = new SingleNode('e')
const f = new SingleNode('f')
const g = new SingleNode('g')
const four = new SingleNode('f')
const five = new SingleNode('e')
const six = new SingleNode('d')

d.next = e
e.next = f
f.next = g
g.next = four
four.next = five
five.next = six

console.log('Odd palindrome', is_palindrome(d))


// Not a palindrome

const h = new SingleNode('h')
const i = new SingleNode('i')
const j = new SingleNode('j')
const k = new SingleNode('k')

h.next = i
i.next = j
j.next = k

console.log('Not palindrome', !is_palindrome(h))
