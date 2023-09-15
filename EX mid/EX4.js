//[424][333][112][211] -> 63
//222 211
//111

function totalVolume() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) { //arguments คือค่าที่เราส่งเข้ามาในฟังก์ชัน โดยที่เราไม่รู้ว่าจะส่งเข้ามากี่ค่า แต่เราสามารถเรียกใช้ค่าที่ส่งเข้ามาได้
        let volume = 1;                          //i คือตัวแปรที่ใช้ในการเรียกใช้ค่าที่ส่งเข้ามา โดยเริ่มจาก 0 และเพิ่มขึ้นทีละ 1 
                                                 //จนกว่าจะเท่ากับค่าที่ส่งเข้ามา [4, 2, 4] จะเท่ากับ 1 ค่า จนไปถึง [2, 1, 1] ที่เท่ากับ 4 ค่า
        for (let j = 0; j < arguments[i].length; j++) {
            volume *= arguments[i][j];
        }
        total += volume;
    }
    return total;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))
console.log(totalVolume([2, 2, 2], [2, 1, 1]))
console.log(totalVolume([1, 1, 1]))