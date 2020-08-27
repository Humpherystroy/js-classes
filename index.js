const Animal = require("./Animal");
const Dog = require("./Dog");

const animal = new Animal("Dog", "Woof");
console.log(animal.greet());

const animal2 = new Dog("Cat", "Meow");
console.log(animal2.greet());

animal.name = "Cow";
const animal3 = new Dog("Cow", "MOOOOOOO");
console.log(animal3.newAnimal());

console.log(animal3.greet());

console.log(animal.name);
