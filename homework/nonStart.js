const removeFirstChar = str => str.substring(1)

const nonStart = (str1, str2) => removeFirstChar(str1) + removeFirstChar(str2)

console.log(nonStart("Hello", "There")) // "ellohere"
console.log(nonStart("java", "code")) // "avaode"
console.log(nonStart("shotl", "java")) // "hotlava
