// Buttons
const resetButton = document.getElementById('reset')
const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')
const addButton = document.getElementById('add')
const subtractButton = document.getElementById('subtract')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')
const remainderButton = document.getElementById('remainder')

// Inputs
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')

// Initial Values
let value = 0
let num1, num2
result.value = value

// Event Listeners
resetButton.addEventListener('click', () => {
  value = 0
  result.value = value
})

incrementButton.addEventListener('click', () => {
  value++
  result.value = value
})

decrementButton.addEventListener('click', () => {
  value--
  result.value = value
})

addButton.addEventListener('click', () => {
  value = num1 + num2
  result.value = value
})

subtractButton.addEventListener('click', () => {
  value = num1 - num2
  result.value = value
})

multiplyButton.addEventListener('click', () => {
  value = num1 * num2
  result.value = value
})

divideButton.addEventListener('click', () => {
  value = num1 / num2
  result.value = value
})

remainderButton.addEventListener('click', () => {
  value = num1 % num2
  result.value = value
})

input1.addEventListener('input', event => {
  num1 = Number(event.target.value.replace(/[^\d]/g, ''))
  event.target.value = num1
})

input2.addEventListener('input', event => {
  num2 = Number(event.target.value.replace(/[^\d]/g, ''))
  event.target.value = num2
})
