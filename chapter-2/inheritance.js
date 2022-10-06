import { Person } from "./oop-classes.js";

class Gamer extends Person {
  constructor(name, age, hobby, game) {
    // resgata os valores e constructor de person - get person's constructor
    super(name, age, hobby)
    this.game = game
  }

  sayGame() {
    console.log(`My favorite game is ${this.game}`)
  }
}

const gamer = new Gamer("Marina", 22, "play game with my friends", "Valorant")

console.log(gamer.sayGame())