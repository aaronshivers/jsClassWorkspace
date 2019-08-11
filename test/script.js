const randomColor = () => Math.floor(Math.random() * 255)

const body = document.querySelector('body')
const a = document.querySelector('a')
const bonus = document.querySelector('#bonus')
const dog = document.querySelector('#dog')
body.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
a.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
body.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
bonus.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
bonus.style.fontFamily = 'Creepster';
bonus.style.fontSize = '2rem';

const audio = new Audio('/bark.mp3')

dog.addEventListener('mouseover', event => {
  audio.play()
})