// An animal shelter, which holds only dog and cat operates strictly on
// a "first in first out" basis. People must adopt either the oldest
// (based on arrival time) of all animals at the shelter, or they can select
// weather they would prefer a dog or cat (and will receive the oldest animal of
// that type). They cannot select which specific animal they would like. Create
// the data structures to maintain this system and implement operations such as
// enqueue, dequeueAny, dequeueDog, dequeueCat. You may use the built-in
// LinkedList data structure

class Animal {
  constructor(type) {
    this.type = type
    this.previous = null
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.sentryHead = new Animal(null)
    this.sentryTail = new Animal(null)

    this.sentryHead.next = this.sentryTail
    this.sentryTail.previous = this.sentryHead

    this.head = null
    this.tail = null
    this.length = 0
  }

  addTail(node) {
    const behind = this.sentryTail.previous
    this.length++

    if (this.sentryHead === behind) {
      console.log('condition', node.type)
      this.head = node
    }
    this.tail = node

    behind.next = node
    this.sentryTail.previous = node

    node.previous = behind
    node.next = this.sentryTail

  }

  removeHead() {
    const currentHead = this.head
    this.length--

    currentHead.previous.next = currentHead.next
    currentHead.next.previous = currentHead.previous
    this.head = currentHead.previous

    if (this.length === 0) { this.head = null }

    return currentHead
  }

  print() {
    let runner = this.head
    const type = this.head.type

    if (!runner) { return Error('No nodes in list') }

    while (runner !== this.sentryTail) {
      runner = runner.next
    }

    console.log(`There are ${this.length} ${type}s in this list`)
  }

}

class Helper {
  static random(min, max) {
    return Math.trunc(Math.random() * (max - min) + min)
  }
}

class AnimalShelter {
  constructor() {
    const dogtorage = new LinkedList()
    const cattorage = new LinkedList()

    this.storage = { dog: dogtorage, cat: cattorage }
  }

  enqueue(animal) {
    this.storage[animal.type].addTail(animal)
  }

  dequeueAny() {
    const random = Helper.random(1, 2)
    if (random === 1 && this.storage.dog.length) {
      return this.storage.dog.removeHead()
    } else if (this.storage.cat.length) {
      return this.storage.cat.removeHead()
    }

    return Error("Not enough animals")
  }

  dequeueDog() {
    return this.storage.dog.removeHead()
  }

  dequeueCat() {
    return this.storage.cat.removeHead()
  }

  show() {
    this.storage.dog.print()
    this.storage.cat.print()
  }

}

const as = new AnimalShelter()

const c1 = new Animal('cat')
const c2 = new Animal('cat')
const c3 = new Animal('cat')

const d1 = new Animal('dog')
const d2 = new Animal('dog')
const d3 = new Animal('dog')

as.enqueue(c1)
as.enqueue(c2)
as.enqueue(c3)
as.enqueue(d1)
as.enqueue(d2)
as.enqueue(d3)

as.dequeueDog()
// as.dequeueCat()

as.show()
