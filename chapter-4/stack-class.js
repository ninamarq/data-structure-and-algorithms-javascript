class Stack {
  constructor() {
    this.count = 0
    this.items = []
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
}

const stack = new Stack
stack.push(8)
stack.push(4)

console.log(stack.count, stack.items)