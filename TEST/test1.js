function findPrimeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n /= divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  
  function multiplyFactors(factors) {
    return factors.reduce((result, factor) => result * factor, 1);
  }
  
  function findPrimeFactorsAndMultiply(n) {
    const factors = findPrimeFactors(n);
    const result = multiplyFactors(factors);
    return result;
  }
  
  // ตัวอย่างการใช้งาน
  const inputNumber = 15;
  const primeFactors = findPrimeFactors(inputNumber);
  const product = multiplyFactors(primeFactors);
  
  console.log(`ตัวประกอบที่แยกได้ของ ${inputNumber} คือ: ${primeFactors}`);
  console.log(`ผลคูณของตัวประกอบที่แยกได้ของ ${inputNumber} คือ: ${product}`);
  