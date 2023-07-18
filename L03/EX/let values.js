const arr1 = ['Apple', 1, false];
const arr2 = ['Fries', 2, true];
const arr3 = ['Mars', 9, 'Apple'];

console.log(arr1 === arr2);
console.log(arr1 === arr3);
console.log(arr2 === arr3); 
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); 
