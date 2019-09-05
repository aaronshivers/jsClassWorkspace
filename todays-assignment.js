const array = ['a', 'b', 'c']
const word = 'telephone'
const items = [
  {
    name: 'gum',
    price: 1.00
  }, {
    name: 'cheese',
    price: 2.25
  }
]

const printAndLabelArray = arr => arr.forEach((el, i) => console.log(i, el))
const printCharsOnSeparateLines = str => str.split('').forEach(el => console.log(el))
const getPricesFromObject = object => object['price']
const addNumbers = (a, b) => a + b
const getTotalPrice = items => items.map(getPricesFromObject).reduce(addNumbers)

// printAndLabelArray(array)
// printCharsOnSeparateLines(word)
console.log(getTotalPrice(items))
