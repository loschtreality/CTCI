// Imagine a (literal) stack of plates. If the stack gets too high,
// it might topple. Therefore, in real life, we would likely start
// a new stack when the previous stack exceeds some threshold. Implement
// a data structre SetOfStacks that mimics this. SetOfStacks should be
// composed of several stacks and should create a new stack once the previous
// once exceeds capaciy. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values
// as if there were just a single stack)

// Follow up:
// Implement a funciton popAt(index) which performs a pop operation on a
// specific sub-stack


class SetOfStacks {
  constructor(capacity = 3) {
    this.capacity = capacity
    this.masterStack = [[]]
    this.stackHistory = []
    this.currentIndex = 0
  }

  push(value) {
     this.updateCurrentIndex()
    if (this.atCapacity() && this.atLastStack()) {
      this.addStack()
    }
      this.getCurrentStack().push(value)
  }

  pop() {
    if (this.stackEmpty()) return Error('Stack is empty')
    const currentStack = this.getCurrentStack()

    if (this.stackHistory.length > 0) {
      this.updateCurrentIndex()
      this.getCurrentStack().pop()
    } else {
      currentStack.pop()
    }

    if (this.stackEmpty()) { this.updateCurrentIndex() }
  }

  popAt(index) {
    if (this.stackEmpty(index)) return Error('Stack empty at that index')
    this.getCurrentStack(index).pop()
    this.stackHistory.push(index)
    this.currentIndex = index
  }

  print() {
    console.log(this.masterStack)
  }

  atCapacity() {
    return this.getCurrentStack().length === this.capacity
  }

  addStack() {
    this.masterStack.push([])
    this.currentIndex++
  }

  stackEmpty(index = this.currentIndex) {
    return this.masterStack[index].length === 0
  }

  getCurrentStack(index = this.currentIndex) {
    return this.masterStack[index]
  }

  atLastStack() {
    return this.currentIndex === (this.masterStack.length - 1 || 0)
  }

  updateCurrentIndex() {
    if (this.stackHistory.length > 0) {
      this.currentIndex = this.stackHistory.pop()
    } else {
      this.currentIndex = this.masterStack.length - 1
    }
  }
}

const sos = new SetOfStacks()
sos.push(1)
sos.push(2)
sos.push(3)
sos.push(4)
sos.push(5)
sos.push(6)
sos.print()
sos.popAt(0)
sos.popAt(1)
sos.popAt(0)
sos.push(7)
sos.push(8)
sos.push(9)
sos.push(10)
sos.print()
