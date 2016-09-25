'use strict';

/*
  A FUNCTION's PROTOTYPE: is the object *instance* that will become the
  prototype for all object created using this funciton as a Constructor

  A OBJECT's PROTOTYPE: is the object instance from which the object is
  inherited
*/

function Cat(name, colour) {
  this.name = name;
  this.colour = colour;
}

Cat.prototype.age = 3;

const fluffy = new Cat('Fluffy', 'white');
const muffin = new Cat('Muffin', 'brown');

console.log(Cat.prototype);  // Cat { age: 3 }
console.log(fluffy.__proto__);  // Cat { age: 3 }
console.log(muffin.__proto__);  // Cat { age: 3 }

console.log(Cat.prototype === fluffy.__proto__); // true
console.log(Cat.prototype === muffin.__proto__); // true
console.log(muffin.__proto__ === fluffy.__proto__); // true

fluffy.age = 5;

console.log(fluffy.age); // 5
console.log(fluffy.__proto__.age); // 3;
console.log(fluffy.hasOwnProperty('age')); // true
console.log(muffin.hasOwnProperty('age')); // false


Cat.prototype = { age: 10 };

const snowbell = new Cat('Snowbell', 'White');

console.log(fluffy.age); // 5
console.log(muffin.age); // 3
console.log(snowbell.age);  // 10

console.log(snowbell.__proto__ === fluffy.__proto__); // false
