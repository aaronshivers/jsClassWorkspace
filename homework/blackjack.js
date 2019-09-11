const blackJack = (a, b) => {
  if (a > 21 && b > 21) return 0

  if (a > 21) return b

  if (b > 21) return a

  return a > b ? a : b
}

console.log(blackJack(19, 21)) // 21
console.log(blackJack(21, 19)) // 21
console.log(blackJack(19, 22)) // 19
console.log(blackJack(23, 22)) // 0