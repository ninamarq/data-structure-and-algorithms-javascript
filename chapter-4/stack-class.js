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

  // removing last element from object (items)
  pop() {
    if (this.isEmpty()) return undefined

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
}

const stack = new Stack
stack.push(8)
stack.push(4)

stack.pop()

console.log(stack.count, stack.items)