// 1. Method flat 
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2)) // recive as param the number of levels to flatten

// 2. Method flatMap
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));