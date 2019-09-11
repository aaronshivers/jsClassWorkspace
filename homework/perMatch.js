const name1 = 'franklin'
const name2 = 'alfredo'

const createCharMap = string => {
  const map = {}

  for (const char of string) {
    map[char] ? map[char]++ : map[char] = 1
  }

  return map
}

const compareStrings = (str1, str2) => {
  let count = 0

  const map1 = createCharMap(str1)
  const map2 = createCharMap(str2)

  Object.keys(map1).forEach(char => {
    if (Object.keys(map2).includes(char)) {
      count += map1[char] + map2[char]
    }
  })

  return `${name1} and ${name2} are a ${Math.floor(count / (str1.length + str2.length) * 100)}% match`
}

console.log(compareStrings(name1, name2))