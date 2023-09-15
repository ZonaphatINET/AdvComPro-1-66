function sumTowSmallestNums(arr) {
    arr.sort((a, b) => a - b); //เรียงค่าใน arr จากน้อยไปมาก ก่อนเรียง: [5, 3, 1, 9, 7]
    return arr[0] + arr[1];                             //หลังเรียง: [1, 3, 5, 7, 9]
    //เมื่ออาร์เรย์ arr ถูกเรียงลำดับแล้ว เราเรียกใช้ค่าสองค่าแรกของอาร์เรย์ (ที่เป็นค่าน้อยที่สุด) 1 + 3 = 4
    
}

console.log(sumTowSmallestNums([19, 5, 42, 2, 77]));//7
console.log(sumTowSmallestNums([10, 343445353, 3453445, 3453545353453]));//3453455
console.log(sumTowSmallestNums([2, 9, 6, -1]));//1