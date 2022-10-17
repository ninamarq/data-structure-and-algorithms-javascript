export class Person {
  constructor(name, age, hobby) {
    this.name = name
    this.age = age
    this.hobby = hobby
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}!`)
  }

  sayAge() {
    console.log(`I'm ${this.age} years old!`)
  }

  sayHobby() {
    console.log(`My principal hobby is to ${this.hobby}!`)
  }
}

const person1 = new Person('Marina', 22, 'Play videogame and watch movies')
// console.log(person1.sayHello(), person1.sayAge(), person1.sayHobby())