const SOUND_SPEED = 343;  // ความเร็วของเสียง 343 m/s

// ฟังก์ชันคำนวณตำแหน่งที่เกิดเสียงระเบิด
function calculateExplosionPosition(sensor1, sensor2, sensor3) {
    const t1 = sensor1.time;
    const t2 = sensor2.time;
    const t3 = sensor3.time;

    const x1 = sensor1.x;
    const x2 = sensor2.x;
    const x3 = sensor3.x;

    const y1 = sensor1.y;
    const y2 = sensor2.y;
    const y3 = sensor3.y;

    const A = 2 * (x2 - x1);
    const B = 2 * (y2 - y1);
    const E = Math.pow(t1, 2) - Math.pow(t2, 2) - Math.pow(x1, 2) + Math.pow(x2, 2) - Math.pow(y1, 2) + Math.pow(y2, 2);
    const C = 2 * (x3 - x1);
    const D = 2 * (y3 - y1);
    const F = Math.pow(t1, 2) - Math.pow(t3, 2) - Math.pow(x1, 2) + Math.pow(x3, 2) - Math.pow(y1, 2) + Math.pow(y3, 2);

    const x = (E * D - B * F) / (A * D - B * C);
    const y = (E * C - A * F) / (B * C - A * D);

    return { x, y };
}

// ฟังก์ชันในการคำนวณตำแหน่งที่เกิดเสียงระเบิด
function bomb(sensorData) {
    const sensor1 = { x: sensorData[0][0], y: sensorData[0][1], time: sensorData[0][2] };
    const sensor2 = { x: sensorData[1][0], y: sensorData[1][1], time: sensorData[1][2] };
    const sensor3 = { x: sensorData[2][0], y: sensorData[2][1], time: sensorData[2][2] };

    return calculateExplosionPosition(sensor1, sensor2, sensor3);
}

// การใช้งาน
console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]))
console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]]))