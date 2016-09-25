'use strict';

var cat = {
  name: { first: 'Fluffy', last: 'LaBeouf' },
  colour: 'white'
};

Object.defineProperty(
  cat,
  'fullName',
  get: function() {
    return `${this.name.first} ${this.name.last}`;
  },
  set: function(value) {
    const [first, last] = value.split(' ');
    this.name.first = first;
    this.name.last = last;
  }
);

cat.fullName = 'Muffin Top';
console.log(cat.fullName); // Muffin Top
console.log(cat.name.first); // Muffin
console.log(cat.name.last); // Top
