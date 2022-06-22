const helloWorld = () => {
  const message = 'Hello World';
  console.log(message);
}
helloWorld();
console.log(message); 


var scope = 'I am a global scope';
const functionScope = () => {
    var scope = 'I am just a local scope';
    const func = () => {
        return scope;
    }
    console.log(func());
}
functionScope();
console.log(scope); 