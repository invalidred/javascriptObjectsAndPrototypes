'use strict';

const cat = {
  name: { first: 'Fluffy', last: 'LaBeouf' }
  colour: 'white'
};

// To get Object Properties. Described more in details below
Object.getOwnPropertyDescriptor(cat, 'name');

/*
   Object {
     value: [object Object],
     writable: true,
     enumerable: true,
     configurable: true
   }
*/

// 1. The "writable" property
Object.defineProperty(cat, 'name', {writable: false});

  // Changing the name property should ERROR, when using 'strict mode'
  cat.name = 'Scratchy'; // ERROR

  // This should be fine however
  cat.name.first = 'Scratchy'; // OK

  // Use Object.freeze to make 'names' properties not writable
  Object.freeze(cat.name);
  cat.name.first = 'Shady';  // ERROR


// 2. The "enumerable" property
Object.defineProperty(cat, 'name', {enumerable: false});

  // 2a. 'name' wont be part of for-in loop
  for (const propertyName in cat) {
    console.log(`${propertyName} : ${cat[propertyName]}`);
  }

  // 2b. 'name' wont be part of Object.keys
  Object.keys(cat);

  // 2c. 'name' wont be part of serialization
  JSON.strinfigy(cat);

// 3. The "configurable" property
Object.defineProperty(cat, 'name', {configurable: false});

  // Now you cannot change enumerable=false of 'name'
  Object.defineProperty(cat, 'name', {enumerable: false}); // ERROR

  // Once configurable=false, you cannot set configurable=true again
  Object.defineProperty(cat, 'name', {configurable: true}) // ERROR

  // You can however change 'writable' property
  Object.defineProperty(cat, 'name', {writable: false}); // OK!

  // you cannot delete 'name' property
  delete cat.name; // ERROR
