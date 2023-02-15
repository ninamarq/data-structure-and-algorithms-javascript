export const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
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

// for ... of
for (const n of numbers) {
  console.log(n % 2 === 0 ? 'even': 'odd')
}

// @@iterator
let iterator = numbers[Symbol.iterator]()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

for (const n of iterator) {
  console.log(n)
}

// entries, values & keys
let aEntries = numbers.entries()
console.log(aEntries.next().value)

let aKeys = numbers.keys()
// done representa se chegou ao final da array ou não - done represents if array is over, boolean value
console.log(aKeys.next())