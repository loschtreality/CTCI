// Class to import for each question

class SingleNode {
  constructor(value) {
    this.value = value
    this.next = null
  }

  print_values() {
    let head = this
    while (head) {
      console.log(head.value)
      head = head.next
    }
  }

}

module.exports = SingleNode
