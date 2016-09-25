//There are 4 ways to create Objects in Javascript

// 1. Object Literal
const fluffyCat = {
  name: 'Fluffy',
  colour: 'green',
  speak: function() {
    console.log('Meow');
  }
};

// 2. Constructor function
const Cat = function(name, colour) {
  this.name = name;
  this.colour = colour;
};

Cat.prototype.speak = function() {
  console.log('Meow');
}

const fluffyCat = new Cat('Fluffy', 'green');

// 3. Object.create
// Note both Constructor functions and Object Literal use
// Object.create underhood to create objects
const fluffyCat = Object.create(Object.prototype, {
  name: {
    value: 'Fluffy',
    enumerable: true,
    writable: true,
    configurable: true
  },
  colour: {
    value: 'green',
    enumerable: true,
    writable: true,
    configurable: true
  }
});

// 4. ES6 Class
class Cat {
  constructor(name, colour) {
    this.name = name;
    this.colour = colour;
  }

  speak() {
    console.log('Meow');
  }
}

const fluffyCat = new Cat('fluffy', 'age');
