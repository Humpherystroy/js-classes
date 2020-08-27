class Animal {
  constructor(name, speak) {
    this._name = name;
    this._speak = speak;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  greet() {
    return `I am a ${this.name}
        and I make this sound ${this._speak}`;
  }
}

module.exports = Animal;
