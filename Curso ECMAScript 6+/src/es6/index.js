/*
* Table of contents
*  1. Functions in ES6+ - default parameters
*  2. Template literals
*  3. Multi-line strings
*  4. Destructuring
*/


// Way to write functions ES5
function oldFuntion (name, age, country) {
    var name = name || 'Andrés Patiño';
    var age = age || 27;
    var country = country || 'CO';
    console.log(name, age, country);
}


// 1. ES6+ way of writing functions
function FunctionES6(name = 'Andrés Patiño', age = 27, country = 'CO') {
    console.log(name, age, country);
}

FunctionES6(); // Default params values
FunctionES6('Tatiana', 24, 'CO'); // With params values

// Concatenation ES5
let hello = "Hello";
let world = "World";
let phrase = hello + " " + world;
console.log(phrase);

// 2. Template literals ES6+
let hello2 = "Hello";
let world2 = "World";
let phrase2 = `${hello2} ${world2}`; // Template literals
// To wirte the quoatation marks in template literals use ALT + 96 ``
console.log(phrase2);

// Multi-line strings ES5
let lorem = "lorem ipsum dolor sit amet consectetur adipisicing elit. \n" + "Quisquam, quidem, quos, dolores, voluptas, quae, dolore, officia, eaque, doloribus, quaerat, voluptate, quisquam quisquam.";

// 3. Multi-line strings ES6+
let lorem2 = `Lorem ipsum dolor
sit amet consectetur adipisicing elit.`;

console.log(lorem);
console.log(lorem2);


// 4. Destructuring ES6+
let person = {
    'name': 'Andrés Patiño',
    'age': 27,
    'country': 'CO'
}

let { name, age, country } = person;

console.log(name, age, country);