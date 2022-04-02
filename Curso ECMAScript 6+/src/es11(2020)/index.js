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
