const posNeg = (a, b, param) => {
  return a < 0 && b > 0 || b < 0 && a > 0 || param && a < 0 && b < 0
}

console.log(posNeg(0, 0, false)) // false
console.log(posNeg(0, 1, false)) // false
console.log(posNeg(1, 0, false)) // false
console.log(posNeg(1, 1, false)) // false
console.log(posNeg(1, -1, false)) // true
console.log(posNeg(-1, 1, false)) // true
console.log(posNeg(-4, -5, true)) // true
