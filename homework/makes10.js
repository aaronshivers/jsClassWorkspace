const makes10 = (a, b) => a === 10 || b === 10 || a + b === 10

console.log(makes10(9, 10)) // true
console.log(makes10(9, 9)) // false
console.log(makes10(1, 9)) // true
