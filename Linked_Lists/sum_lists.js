// You have two numbers represented by a linked list, where each node contains
// a single digit. The digits are stored in reverse order, such that the 1's
// digit is at the head of the list. Write a function that adds the two numbers
// and returns the sum as a linked list

// Example:

// Input (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295
// Output (2 -> 1 -> 9). That is 912


// Follow Up

// Suppose the digits are store in forward order repeat the above problem

// Input (6 -> 1 -> 7) + (2 -> 9 -> 5). That is 617 + 295
// Output (9 -> 1 -> 2). That is 912


// Ideas:

// 1. Push link values into a respective string in reverse. Evaluate the sum of the two,
  // split the string, create a new linked list in reverse
// Time: o(n) space: o(n)

// 2.

const SingleNode = require('./linked_list')

const sum_lists = (num_one, num_two) => {
  let first = ''
  let second = ''

  let runner = num_one

  while (runner) {
    first = runner.value + first
    runner = runner.next
  }

  runner = num_two

  while (runner) {
    second = runner.value + second
    runner = runner.next
  }

  let sum = JSON.stringify(eval(`${first} + ${second}`)).split('')
  .map((number) => {
    return new SingleNode(Number(number));
  })

  for (var i = sum.length - 1; i >= 0; i--) { sum[i].next = sum[i - 1] || null }

  return sum[sum.length - 1]
}


const sum_lists_other = (num_one, num_two) => {
  let first = []
  let second = []

  let runner = num_one

  while (runner) {
    first.push(runner.value)
    runner = runner.next
  }

  runner = num_two

  while (runner) {
    second.push(runner.value)
    runner = runner.next
  }

  let sum = JSON.stringify(eval(`${first.join('')} + ${second.join('')}`))
  .split('')
  .map((number) => {
    return new SingleNode(Number(number));
  })

  for (var i = 0; i < sum.length; i++) { sum[i].next = sum[i + 1] || null }

  return sum[0]
}


const a = new SingleNode(6)
const b = new SingleNode(1)
const c = new SingleNode(7)

c.next = b
b.next = a

const d = new SingleNode(2)
const e = new SingleNode(9)
const f = new SingleNode(5)

f.next = e
e.next = d

// Other direction

const g = new SingleNode(6)
const h = new SingleNode(1)
const i = new SingleNode(7)

g.next = h
h.next = i

const j = new SingleNode(2)
const k = new SingleNode(9)
const l = new SingleNode(5)

j.next = k
k.next = l

const result = sum_lists(c, f)
const result2 = sum_lists_other(g, j)

console.log(result)
console.log(result2)
