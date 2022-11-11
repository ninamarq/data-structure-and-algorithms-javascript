import { numbers } from "./insert_first_position.js";

// Remove elementos - splice([index], [how many elements will be removed])
numbers.splice(1,2,22,66,87)
// Remove elementos e adiciona outros no indice - splice([index], [how many elements will be removed], [elements to add])
numbers.splice(1,2,22,66,87)
numbers.splice(1,3,11,22,3)
console.log(numbers)