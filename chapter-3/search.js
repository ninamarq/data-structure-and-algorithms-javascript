import { numbers } from "./ordering-elements.js";

console.log(numbers.indexOf(10))
console.log(numbers.indexOf(17))

numbers.push(10)
console.log(numbers.lastIndexOf(10))

const multipleOfFive = (element) => (element % 5 === 0)

console.log(numbers.find(multipleOfFive))
console.log(numbers.findIndex(multipleOfFive))
console.log(numbers.includes(5))

// check if the element 7 exists after 8th index
console.log(numbers.includes(7,8))