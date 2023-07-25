// libArea.mjs
function areaTriangle(b,h){
    retuen (b*h)/2;
}

function areaCircle(r){
    return Math.PI * r * r;
}

function areaSquare(w, l){
    return w * l;
}

export {areaTriangle, areaCircle, areaSquare};