function digitalClock(time) {
    let hour = Math.floor(time / 3600) % 24;
    let minute = Math.floor((time % 3600) / 60);
    let second = time % 60;
    return `${hour}:${minute}:${second}`;
}

console.log(digitalClock(5025));  // 1:23:45
console.log(digitalClock(61201)); // 17:00:01
console.log(digitalClock(87000)); // 0:10:00
