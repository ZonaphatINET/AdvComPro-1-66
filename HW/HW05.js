function evalProduct(factors) {
  return factors.reduce((result, factor) => result * factor, 1);
}

function maxProductExplanation(n) {
  if (n <= 3) {
    return `Input: n = ${n}\nOutput: ${n}\nExplanation: ${n} = ${n} + 0, ${n} × 1 = ${n}`;
  }

  let explanation = `Input: n = ${n}\n`;
  let originalN = n; // เพิ่มตัวแปร originalN เพื่อเก็บค่า n ต้นฉบับ

  let factors = [];

  while (n > 4) {
    factors.push(3);
    n -= 3;
  }

  if (n === 2) {
    factors.push(2);
  } else if (n === 3) {
    factors.push(3);
  }

  let product = factors.join(" × ");
  let result = evalProduct(factors);

  explanation += `Output: ${result}\n`;
  explanation += `Explanation: ${originalN} = ${factors.join(" + ")}, ${product} = ${result}`;

  return explanation;
}

// Example usage
console.log(maxProductExplanation(2));
console.log(maxProductExplanation(5));
console.log(maxProductExplanation(7));
console.log(maxProductExplanation(10));
console.log(maxProductExplanation(15));
