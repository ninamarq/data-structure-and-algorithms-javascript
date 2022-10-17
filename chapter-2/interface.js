function printName(person) {
    console.log(person.name);
}
var john = { name: "John", age: 64 };
// duck typing
var mary = { name: "Mary", age: 58, phone: "1234-5678" };
printName(john);
printName(mary);
