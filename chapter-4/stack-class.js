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
}