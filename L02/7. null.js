function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels("seeing"));

///มีตัวแปลแต่ไม่มีค่าอยู่ข้างใน