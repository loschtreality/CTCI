// Write a program to sort a stack such that the smallest items are on top
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structre (such as an array). The stack supports the following
// operations: push, pop, peek, and isEmpty

// Clarificaitons:

// Should the function alter the original stack or return a sorted copy?
// Can the sort be a class method


// Quickly implemented stack
class Stack {
  constructor(stack = []) {
    this.values = stack
  }

  remove() {
    this.values.pop()
  }

  peek() {
    return this.values[this.values.length - 1]
  }

  add(value) {
    this.values.push(value)
  }

  print() {
    console.log(this.values)
  }

  isEmpty() {
    return this.values.length > 0
  }

}


const sortStack = (stack) => {
  const tempStack = new Stack()

  while (!stack.isEmpty()) {
    let temp = stack.remove()

    while (!tempStack.isEmpty() && tempStack.peek() > temp) {
      stack.add(tempStack.remove())
    }

    tempStack.add(temp)
  }

  while (!tempStack.isEmpty()) {
    stack.add(tempStack.remove())
  }

  return stack
}

const stack = new Stack([1,5,19,4,2,3,7,9,21])
// console.log(stack.length)
console.log(sortStack(stack))
