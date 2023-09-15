function jumpingFrog(jumpStrength, stones) {
    let jumps = 1;
    let currentPosition = 0;

    while (currentPosition < stones.length) {
        if (stones[currentPosition] === 0) {
            break;
        }

        const nextJumpDistance = stones[currentPosition];

        // กระโดดไปยังหินถัดไป
        currentPosition += nextJumpDistance;

        // เพิ่มจำนวนกระโดด
        jumps++;
    }

    return jumps;
}

console.log(jumpingFrog(5, [1, 1, 1, 1, 1])); // 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1])); // 4
console.log(jumpingFrog(5, [1, 1, 0, 1, 1])); // 3