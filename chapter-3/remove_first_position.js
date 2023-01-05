import { numbers } from "./insert_first_position.js";

// Última posição com valor 'undefined' // Last position's value 'undefined'
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i + 1]
// }

for (let i = 0; i < (numbers.length - 1); i++) {
  numbers[i] = numbers[i + 1]
}

console.log(numbers)