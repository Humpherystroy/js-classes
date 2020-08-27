const Animal = require("./Animal");

class Dog extends Animal {
  constructor(name, speak, sound) {
    super(name, speak);

    this._sound = this._sound;
  }

  newAnimal() {
    return `I am a ${this._name} and I make the sound ${this._sound}!`;
  }
}

module.exports = Dog;
