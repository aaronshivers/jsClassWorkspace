const studentScores = [72, 94, 81, 98, 86]
const minScore = 90

const reducer = (acc, cur) => (acc + cur)

const getAvg = (num, divisor) => num / divisor

// const meetsMinScore = (totalScore, min) => totalScore > min

const recievesScholorship = scores => min => getAvg(scores.reduce(reducer) / scores.length) > min

const result = recievesScholorship(studentScores)(minScore)

console.log(result)
