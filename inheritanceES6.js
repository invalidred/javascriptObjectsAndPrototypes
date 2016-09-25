'use strict';

class Animal {
  constructor(voice='grunt') {
    this.voice = voice;
  }

  speak() {
    console.log(this.voice);
  }
}

class Cat extends Animal {
  constructor(name, colour) {
    super('Meow');
    this.name = name;
    this.colour = colour;
  }
}

const fluffy = new cat('fluffy', 'white');

console.log(fluffy instanceof Animal); // true
console.log(fluffy instanceof Cat); // true

// ES6 and ES5 minor difference
// if fluffy was constructed using ES5 inheritance speak() would be enumerable
console.log(Object.keys(fluffy.__proto__.__proto__)); // Array {}
console.log(fluffy.__proto__.__proto__.hasOwnProperty('speak')); // true
