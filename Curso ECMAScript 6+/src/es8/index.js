// 1. Object.entries()
const team = {
    frontend: 'Jorge',
    backend: 'Juan',
    design: 'Pedro'
}

const entries = Object.entries(team);
console.log(entries);
console.log(entries.length);

// 2. Object.values()
const team2 = {
    frontend: 'Jorge',
    backend: 'Juan',
    design: 'Pedro'
}

const values = Object.values(team2);
console.log(values);
console.log(values.length);

// 3. Padding
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '----'));

// 4. Trailing commas
const obj = {
    name : 'Pedro',
}

// 5. Async-Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.error(error);
    }
}
anotherFunction();