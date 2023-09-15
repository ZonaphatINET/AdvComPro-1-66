function isValidIP(str) {
  return str.split('.').filter
  //str.split('.') ทำการแยกสตริง str ด้วยเครื่องหมายจุลภาค (.) เพื่อทำให้เกิดการแบ่งส่วนที่ตัวเลขแยกกัน.
  (function(v){return v==Number(v).toString() && Number(v)<256})
  //คือการใช้ filter เพื่อกรองสมาชิกในอาร์เรย์ที่ได้จากการแบ่งส่วนด้านบน โดยตรวจสอบว่า:v==Number(v).toString() 
  //ค่าในส่วนนั้นต้องเป็นตัวเลขที่เหมือนกันเมื่อแปลงเป็นตัวเลขแล้วกลับมาเป็นสตริง 
  //.Number(v)<256 ค่าในส่วนนั้นต้องน้อยกว่า 256.
  .length==4;
  //เป็นการตรวจสอบว่าจำนวนส่วนที่แบ่งสตริงออกมามีทั้งหมด 4 ส่วน คือ จำนวน IP ที่ถูกต้องมีความยาวเป็น 4 ส่วน (e.g., x.x.x.x).
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3 "));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));