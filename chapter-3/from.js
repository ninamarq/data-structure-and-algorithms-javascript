import { numbers } from "./iteration-functions.js";

// Cria novo array a partir de um existente - Create a new list based in another
let numbers2 = Array.from(numbers)
let numbers3 = Array.from(numbers, x => (x % 2 == 0))

console.log(numbers2, numbers3)