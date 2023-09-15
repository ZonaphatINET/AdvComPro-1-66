// 4 -> [2, 2]
// 4, 10, 11, -9

function numberSplit(n) {
    let a = Math.floor(n / 2); //a ถูกหาร 2 แล้วปัดเศษทิ้งซึ่งจะทำให้ได้ค่าครึ่งหนึ่งที่ถูกปัดเศษไปแล้ว
    let b = n - a; //b คือค่าที่ได้จากการนำค่า n มาลบกับค่า a จะทำให้เราได้ค่าที่เหลืออีกครึ่งหนึ่ง
    return [a, b];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));