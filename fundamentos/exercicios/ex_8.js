
function multiplar(a, b) {
    let r = 0;
    for (let i = 1; i <= a; i++) {
        r = r + b;
    }
    return r;
}

console.log(multiplar(3, 6));