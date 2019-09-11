const array = [1, 2, 3]

const getArrayAvg = arr => arr.reduce((a, b) => a + b) / arr.length

console.log(getArrayAvg(array))