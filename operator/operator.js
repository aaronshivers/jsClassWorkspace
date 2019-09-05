const string1 = 'hello there'
const string2 = 'ham sandwich'

const length = string1.length + string2.length

console.log(string1[0] + string2[0])

console.log(string2.split('').reverse().join(''))

const printLargerString = (str1, str2) => {
  return string1.length > string2.length ? string1 : string2
}

console.log(printLargerString(string1, string2))
