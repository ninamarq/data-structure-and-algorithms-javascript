class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  // push
  push(element) {
    this.items[this.count] = element
    this.count++
  }

  // verifying if items is empty or its size
  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  // removing last element from object (items)
  pop() {
    if (this.isEmpty()) return undefined

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) return undefined

    return this.items[this.count - 1]
  }

  clear() {
    while (!this.isEmpty()) this.pop()
  }

  toString() {
    if (this.isEmpty()) return ''

    let objString = `${this.items[0]}`

    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
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

console.log(stack.toString())