// Preenche o array com um valor - Fill the list with argument's value
let numbersCopy = Array.of(1,2,3,4,5,6)

numbersCopy.fill(0)
// fill(value, initial index)
numbersCopy.fill(2,1)
// fill(value, initial index, final index)
numbersCopy.fill(1, 3, 5)
console.log(numbersCopy)