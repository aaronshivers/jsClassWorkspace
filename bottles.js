const word = 'bottle'
const pluralized = 's'
let count = 99

while (count > 0) {
  if (count === 1) {
    console.log(`${ count } ${ word } of beer on the wall`)
    console.log(`${ count } ${ word } of beer`)
  } else {
    console.log(`${ count } ${ word }${ pluralized } of beer on the wall`)
    console.log(`${ count } ${ word }${ pluralized } of beer`)
  }
  
  console.log(`take one down pass it around`)

  count--

  if (count === 1) {
    console.log(`${ count } ${ word } of beer on the wall`)
  } else if (count > 0) {
    console.log(`${ count } ${ word }${ pluralized } of beer on the wall`)
  } else {
    console.log(`no more ${ word } of beer on the wall`)
  }
}
