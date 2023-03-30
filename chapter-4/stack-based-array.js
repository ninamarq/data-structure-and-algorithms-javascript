class Stack {
  constructor() {
    this.items = [];
  }
  // add element as last element from stack
  push(element) {
    this.items.push(element)
  }
  // remove last element - representing the LIFO principle. the first is the last, and the last is the first
  pop() {
    return this.items.pop()
  }
  // searching the last element added, the peek of stack
  peek() {
    return this.items[this.items.length - 1]
  }
  // checking if stack is empty
  isEmpty() {
    return this.items.length === 0
  }
  // checking stack size
  size() {
    return this.items.length
  }
  // cleaning stack
  clear() {
    this.items = []
  }
}