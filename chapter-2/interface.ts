interface Person {
  name: string
  age: number
}

function printName(person: Person) {
  console.log(person.name)
}

const john = { name: "John", age: 64 }
// duck typing
const mary = { name: "Mary", age: 58, phone: "1234-5678" }
printName(john)
printName(mary)