let arr1 = ['a', true, 2]

// push and pop
console.log("\n*** push and pop ***")
console.log(arr1.push('New value'))
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

// shift and unshift
console.log("\n*** shift and unshift ***");
console.log(arr1.unshift('New value'));
console.log(arr1);
console.log(arr1.shift()); // removes first element
console.log(arr1);

//concat
console.log("\n*** concat ***");
let arr2 = ['b', false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1,2,3]);
console.log(newArr);
console.log(newArr2);