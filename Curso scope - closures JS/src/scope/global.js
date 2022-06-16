// Scope global
var hello = 'Hello'; 
let world = 'World';
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// Mala practica
const helloWorld = () => {
    globalVar = 'Im global';
}

helloWorld();
console.log(globalVar);
