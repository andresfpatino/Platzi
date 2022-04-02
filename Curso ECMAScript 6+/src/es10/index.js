// 1. Method flat 
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2)) // recive as param the number of levels to flatten

// 2. Method flatMap
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));

// 3. Method trimStart
let hello = '           Hello world';
console.log(hello);
console.log(hello.trimStart());

// 4. Method trimEnd
let hello2 = 'hello world                  ';
console.log(hello2);
console.log(hello2.trimEnd());

// 5. Optional catch binding
try {

} catch {
    error
}