// Implement a MyQueue class which implements a queue using two stacks

class MyQueue {
  constructor() {
    this.stackOne = []
    this.stackTwo = []
  }

  add(item) {
    this.stackOne.push(item)
  }

  remove() {
    if (!this.stackTwo.length) {
      while (this.stackOne.length) {
        this.stackTwo.push(this.stackOne.pop())
      }
    }
    return this.stackTwo.pop()
  }

  peek() {
    return this.stackTwo[this.stackTwo.length - 1] || this.stackOne[0]
  }

  isEmpty() {
    return !this.stackOne.length && !this.stackTwo.length
  }

  print() {
    console.log(`In: ${this.stackOne}\nout: ${this.stackTwo}`)
  }

}

const myQ = new MyQueue()
myQ.add(1)
myQ.add(2)
myQ.add(3)
myQ.print()
myQ.remove()
myQ.remove()
myQ.add(7)
myQ.print()
