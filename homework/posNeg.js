const posNeg = (a, b, param) => {
  const oneNegOnePos = a < 0 && b > 0 || b < 0 && a > 0
  const bothNegAndTruePassedIn = param && a < 0 && b < 0
  return oneNegOnePos || bothNegAndTruePassedIn
}

console.log(posNeg(0, 0, false)) // false
console.log(posNeg(0, 1, false)) // false
console.log(posNeg(1, 0, false)) // false
console.log(posNeg(1, 1, false)) // false
console.log(posNeg(1, -1, false)) // true
console.log(posNeg(-1, 1, false)) // true
console.log(posNeg(-4, -5, true)) // true
