'use strict';

function Animal(voice='grunt') {
  this.voice = voice;
}

Animal.prototype.speak = function() {
  console.log(this.voice);
}

function Cat(name, colour) {
  Animal.call(this, 'Meow');
  this.name = name;
  this.colour = colour;
}

// use Object.create instead of new Animal to avoid creating animal in memory
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const fluffy = new Cat('Fluffy', 'White');

console.log(fluffy.__proto__); // Cat
console.log(fluffy.__proto__.__proto__); // Animal
console.log(fluffy.__proto__.__proto__.__proto__); // Object
console.log(fluffy.__proto__.__proto__.__proto__.__proto__); // null

console.log(fluffy instanceof Animal); // true
console.log(fluffy instanceof Cat); // true
