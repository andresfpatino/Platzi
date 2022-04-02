// 1. Dynamic import
const button = document.getElementById('btn');

button.addEventListener('click', async function(){
    const module = await import('./file.js');
    module.hello();
})

// 2. BigInt methods
const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(bigNumber);
console.log(anotherBigNumber);

// 3. Promise.allSettled()
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// 4. globalThis
console.log(window);
console.log(globalThis);

// 5. Nullish operator (??)
const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)

// 6. Optional chaining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}