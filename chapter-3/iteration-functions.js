const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
const isEven = x => x % 2 === 0

// every method
// const every = numbers.every((number) => isEven(number))
const every = numbers.every(isEven)
console.log(every)

// some
// const some = numbers.some((number) => isEven(number))
const some = numbers.some(isEven)
console.log(some)

// forEach
const forEach = numbers.forEach(x => console.log(x % 2 === 0))
console.log(forEach)

// map
const map = numbers.map(isEven)
console.log(map)

// filter
const filter = numbers.filter(isEven)
console.log(filter)

// reduce
const reduce = numbers.reduce((previous, current) => previous + current)
console.log(reduce)
