import { Stack } from "./stack-class.js";

function decimalToBinary(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let number = decNumber
  let rem
  let baseString = ''

  if (!(base >= 2 &&  base <= 36)) {
    return ''
  }

  while(number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number/base)
  }

  while(!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}

console.log(decimalToBinary(8271, 16))
console.log(decimalToBinary(10,9))