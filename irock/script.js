const app = document.getElementById('app')
const bubble = document.getElementById('bubble')
const text = document.getElementById('text')
const rock = document.getElementById('rock')

const happy = '/images/rock_happy.png'
const sad = '/images/rock.png'

let isHappy = false

window.addEventListener('load', () => {
})

const sounds = ['pain.mp3', 'torture.mp3', 'slap.mp3', 'zombie.mp3', 'grunt.mp3']
const messages = [
  'Stop That!',
  `Please, don't do that.`,
  'Seriously, quit.',
  'Knock it off', 
  'Why?'
]

const getRandomSound = sounds => sounds[Math.floor(Math.random() * sounds.length)]
const getRandomMessage = messages => messages[Math.floor(Math.random() * messages.length)]

const greeting = () => {
  let sound = getRandomSound(sounds)
  const audio = new Audio(sound)
  audio.play()
  event.target.src = isHappy ? sad : happy
  text.innerText = getRandomMessage(messages)
}

rock.addEventListener('click', event => {
  greeting()
  isHappy = !isHappy
})