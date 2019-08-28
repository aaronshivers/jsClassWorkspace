const icyHot = (a, b) => a < 0 && b > 100 || b < 0 && a > 100

console.log(icyHot(120, -1)) // true
console.log(icyHot(-1, 120)) // true
console.log(icyHot(2, 120)) // false
