class SoccerPlayer {
  constructor(name, team) {
    this._name = name
    this._team = team
  }

  get name() {
    return this._name
  }

  get team() {
    return this._team
  }

  set name(value) {
    this._name = value
  }

  set team(value) {
    this._team = value
  }
}

let neymar_jr = new SoccerPlayer("Neymar Júnior", "PSG")

console.log("before", neymar_jr._name, neymar_jr._team)
neymar_jr._name = "Gabigol"
neymar_jr._team = "Flamengo"
console.log("after", neymar_jr._name, neymar_jr._team)
