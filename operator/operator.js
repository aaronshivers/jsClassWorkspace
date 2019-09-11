const string1 = 'hello there'
const string2 = 'ham sandwich'

const combinedStringLength = string1.length + string2.length

console.log(string1[0] + string2[0])

console.log(string2.split('').reverse().join(''))

const printLargerString = (str1, str2) => {
  const result = {}

  if (str1.length > str2.length) {
    result['larger'] = str1
    result['smaller'] = str2
  } else {
    result['larger'] = str2
    result['smaller'] = str1
  }
  return result
}

console.log(printLargerString(string1, string2))
