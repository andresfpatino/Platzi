/*
* Table of contents
*  1. Functions in ES6+ - default parameters
*  2. Template literals
*  3. Multi-line strings
*  4. Destructuring
*  5. Spread operator
*  6. Let and Const
*  7. Object short syntax
*  8. Arrow functions
*  9. Promises
*  10. Classes
*  11. Import and export
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


// 5. Spread operator ES6+
let team1 = ['Coco', 'Berlín', 'Atenea'];
let team2 = ['Kiara', 'Kira', 'Martín'];

let mascotas = ['Mia', ...team1, ...team2];
console.log(mascotas);


// 6. Let and Const ES6+
{
    var globalVar = "Global Var";
    // var works in global scope
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
    // Let only works in the scope of the block
}

console.log(globalVar);


const a = "b";
a = "a";
// Error: Assignment to constant variable. it's not possible to change the value of a constant variable
console.log(a);


// 7. Object short syntax ES6+
let nombre = 'Andrés Patiño';
let edad = '27';

obj2 = {nombre, edad};
console.log(obj2);


// 8. Arrow functions ES6+
const names = [
    {name: 'Andrés Patiño', age: 27},
    {name: 'Tatiana', age: 24},
];

// ES5
let listOfNames = names.map(function(item) {
    console.log(item.name);
});

// ES6+
// Anonymous function
const listOfNames2 = names.map(item => console.log(item.name)); 

const listOfNames3 = (name, age, country) => {
    // ...
}

const listOfNames4 = name => {
    // ...
}

const square = num => num * num;


// 9. Promises ES6+
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise() 
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));


// 10. Classes ES6+
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(2,2));


// 11. Import ES6+
import { hello } from './module';
hello();