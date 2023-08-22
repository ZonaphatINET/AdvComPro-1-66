//hApPy -> APhpy
//hApPy, moveMENT, shOrtCAKE

function moveCapital(str) {
    let upperCaseLetters = [];
    let lowerCaseLetters = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'A' && char <= 'Z') { //&& ใช่แทนคำว่า'และ'ในที่นีคือ ค่าที่มากกว่า A และน้อยกว่า Z
            upperCaseLetters.push(char); //เพิ่มค่าที่ได้ลงในตำแหน่งสุดท้ายของ array 
        } else if (char >= 'a' && char <= 'z') {
            lowerCaseLetters.push(char);
        }
    }

    let fullStr = upperCaseLetters.join("") + lowerCaseLetters.join("");
    return fullStr;
}

console.log(moveCapital("hApPy"));
console.log(moveCapital("moveMENT"));
console.log(moveCapital("shOrtCAKE"));
