function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) { //ถ้าค่าใน arr[i] ยังไม่มีใน newArr
            newArr.push(arr[i]); //ให้ push ค่าใน arr[i] เข้าไปใน newArr
        }
    }
    return newArr;
}

console.log(removeDuplicates([1, 0, 1, 0]))
console.log(removeDuplicates(["The", "big", "cat"]))
console.log(removeDuplicates(["John", "Taylor", "John"]))