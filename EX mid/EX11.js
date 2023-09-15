function canMove(piece, start, end) {
    // Convert the start and end positions to numerical coordinates
    const startFile = start.charCodeAt(0) - 65;
    const startRank = parseInt(start[1]) - 1;
    const endFile = end.charCodeAt(0) - 65;
    const endRank = parseInt(end[1]) - 1;

    // Check the piece type and its movement logic
    switch (piece.toLowerCase()) {
        case "rook":
            return startFile === endFile || startRank === endRank;
        case "bishop":
            return Math.abs(startFile - endFile) === Math.abs(startRank - endRank);
        case "king":
            return Math.abs(startFile - endFile) <= 1 && Math.abs(startRank - endRank) <= 1;
        case "knight":
            return (
                (Math.abs(startFile - endFile) === 1 && Math.abs(startRank - endRank) === 2) ||
                (Math.abs(startFile - endFile) === 2 && Math.abs(startRank - endRank) === 1)
            );
        default:
            return false; // Invalid piece type
    }
}

console.log(canMove("Rook", "A8", "H8")); // true
console.log(canMove("Bishop", "A7", "G1")); // true
console.log(canMove("Queen", "C4", "D6")); // false (assuming you meant Queen instead of Queen)