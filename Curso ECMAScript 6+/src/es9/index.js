
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


// 3. Promise finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello world')
            : reject(new Error('Test error'))
    })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('finalizó'))


// 4. Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-04-02');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);