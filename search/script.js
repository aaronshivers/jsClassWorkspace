const form = document.querySelector('form')
const result = document.querySelector('#result')
const paragraph = document.querySelector('#paragraph')

const paragraphArray = paragraph.textContent.replace(/[^\w]/i, '').split(' ')

const foundWordsArray = []
console.log(paragraphArray)

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e.target.value)

  const isWordInArray = word => paragraphArray.includes(word)

  foundWordsArray.push(isWordInArray(e.target.value) && e.target.value)
  result.textContent = foundWordsArray
  console.log(foundWordsArray)
})

// const paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// console.dir(paragraph.textContent)


