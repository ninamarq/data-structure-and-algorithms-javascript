import { Stack } from "./stack-based-array.js";

const stack = new Stack();
// true
console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

//8
console.log(stack.peek())

stack.push(11)

// 3, false
console.log(stack.size(), stack.isEmpty())

stack.push(15)
/////////////////////////////////
stack.pop()
stack.pop()

console.log(stack.size())