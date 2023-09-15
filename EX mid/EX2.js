// 379 -> 9 มากที่สุด
// 379, 2, 377401

function highestDigit(n) {
    let a = n.toString().split(""); //แปลงค่า n ให้เป็น string แล้วใช้ .split("") ในการแยกตัวอักษรออกมาเป็น array
    let b = a.sort(); //ใช้ .sort() ในการเรียงค่าจากน้อยไปมาก
    return b[b.length - 1]; //เรียกใช้ค่าสุดท้ายของ array ที่เราได้จากการ sort มา
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));