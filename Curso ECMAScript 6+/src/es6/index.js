// Way to write functions ES5
function oldFuntion (name, age, country) {
    var name = name || 'Andrés Patiño';
    var age = age || 27;
    var country = country || 'CO';
    console.log(name, age, country);
}


// ES6+ way of writing functions
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

// Concatenation ES6+
let hello2 = "Hello";
let world2 = "World";
let phrase2 = `${hello2} ${world2}`; // Template literals
// To wirte the quoatation marks in template literals use ALT + 96 ``
console.log(phrase2);
