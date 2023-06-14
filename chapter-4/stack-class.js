export class Stack {
  constructor() {
    this._count = 0
    this._items = {}
  }
  // push
  push(element) {
    this._items[this._count] = element
    this._count++
  }

  // verifying if items is empty or its size
  size() {
    return this._count
  }

  isEmpty() {
    return this._count === 0
  }

  // removing last element from object (items)
  pop() {
    if (this.isEmpty()) return undefined

    this._count--
    const result = this._items[this._count]
    delete this._items[this._count]
    return result
  }

  peek() {
    if (this.isEmpty()) return undefined

    return this._items[this._count - 1]
  }

  clear() {
    while (!this.isEmpty()) this.pop()
  }

  toString() {
    if (this.isEmpty()) return ''

    let objString = `${this._items[0]}`

    for (let i = 1; i < this._count; i++) {
      objString = `${objString},${this._items[i]}`
    }

    return objString
  }
}

const stack = new Stack
stack.push(8)
stack.push(4)
stack.push(7)
stack.push(1)

stack.pop()

// console.log(stack.toString())

// getting public methods
// console.log({names: Object.getOwnPropertyNames(stack)})