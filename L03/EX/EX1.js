const arr1 = ['Apple', 1, false];
const arr2 = ['Fries', 9, true, 'Mars'];
const arr3 = ['Mars', 9, 'Apple'];

for (let i = 0; i < arr1.length; i++) { 
  //i เป็นตัวชี้ดัชนี (index) ที่เริ่มต้นจาก 0 และเพิ่มขึ้นทีละหนึ่งในแต่ละรอบของลูปจนกว่าค่าของ i จะไม่น้อยกว่าความยาวของอาเรย์ arr1 (นั่นคือ จำนวนสมาชิกในอาเรย์ arr1)
  //.length ใช้ในการเข้าถึงความยาวหรือจำนวนของสมาชิกในอาร์เรย์หรือสตริง
  if (arr2.includes(arr1[i])) {
    //arr1[i] จะแทนค่าของสมาชิกในอาเรย์ arr1 ที่ดัชนี i
    //ตรวจสอบว่าอาเรย์ arr2 มีสมาชิกที่มีค่าเท่ากับ arr1[i] หรือไม่
    console.log(`The arr1 is the same as the arr2, where the word: ${arr1[i]}`);
    //${arr1[i]} เป็นการใช้สตริงเทมเพลต (string template) ใน JavaScript เพื่อแทนค่าในสตริงด้วยค่าของตัวแปรหรือสมาชิกในอาเรย์
  }
  if (arr3.includes(arr1[i])) {
    console.log(`The arr1 is the same as the arr3, where the word: ${arr1[i]}`);
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (arr3.includes(arr2[i])) {
    console.log(`The arr2 is the same as the arr3, where the word: ${arr2[i]}`);
  }
}

//".includes()" เป็นเมธอด (method) ที่มีอยู่ในอาร์เรย์และสตริงใน JavaScript 
//ซึ่งใช้ในการตรวจสอบว่ามีค่าที่กำหนดอยู่ในอาร์เรย์หรือสตริงหรือไม่ ซึ่งจะคืนค่าเป็น true 
//หากค่าที่กำหนดมีอยู่ และคืนค่าเป็น false หากไม่พบค่านั้นในอาร์เรย์หรือสตริง
//สำหรับอาร์เรย์ เมธอด .includes() จะตรวจสอบสมาชิกในอาร์เรย์ว่ามีค่าที่ตรงกันหรือไม่