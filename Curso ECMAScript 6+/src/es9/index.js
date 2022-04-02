
// 1. Spread operator 
const obj  = {
    name: 'John',
    age: 30,
    country: 'CO'
}

let { country, ...all } = obj;
console.log(all);


// 2. Propagation properties
const obj2  = {
    name: 'John',
    age: 30
}
const obj1 = {
    ...obj2,
    country: 'CO',
}
console.log(obj1);
