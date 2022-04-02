
// 1. Spread operator 
const obj  = {
    name: 'John',
    age: 30,
    country: 'CO'
}

let { country, ...all } = obj;
console.log(all);