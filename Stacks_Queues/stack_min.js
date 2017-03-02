// How would you design a stack which, in addition to push and pop, has a
// function min which returns the minimum element? Push, pop and min should
// all operate in o(1) time


class Stack {
  constructor() {
    this.values = []
    this.min_vals = []
    this.length = 0
  }

  pop() {
    if (this.length === 0) { return new Error('Stack is empty') }

    const last_value = this.peek()

    if (last_value === this.get_min()) {
      this.min_vals.pop()
    }

    this.length--
    this.values.length = this.length
    return last_value
  }

  peek() {
    return this.values[this.length - 1];
  }

  push(value) {
    if (value < this.get_min()) {
      this.min_vals.push(value)
    }

    this.length++
    this.values.length = this.length
    this.values[this.length - 1] = value
  }

  get_min() {
    return this.min_vals[this.min_vals.length - 1] || Infinity
  }

  print() {
    console.log(this.values)
  }

}

const s = new Stack()
s.push(3)
s.push(2)
s.push(1)
console.log(s.get_min())
s.print()
s.pop()
s.print()
console.log(s.get_min())
