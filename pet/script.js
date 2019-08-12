const app = document.getElementById('app')


const anthem = new Audio('./sounds/anthem.mp3')
anthem.volume = 0.05
const playAnthem = () => anthem.play()
const pauseAnthem = () => anthem.pause()
let isPlaying = false

const head = document.createElement('img')
head.setAttribute('id', 'head')
head.classList.add('head', 'center')
head.src = './images/neutral.png'
app.appendChild(head)

const anthemButton = document.createElement('button')
anthemButton.innerText = 'Play Anthem'
anthemButton.classList.add('button', 'center')
app.appendChild(anthemButton)
anthemButton.addEventListener('click', event => {
  isPlaying = !isPlaying
  console.log('isPlaying', isPlaying)
  isPlaying ? event.target.innerText = 'pause anthem' : event.target.innerText = 'play anthem'
  isPlaying ? playAnthem() : pauseAnthem()
})


const animations = [
  {
    audio: './sounds/im-really-rich.wav',
    picture: './images/smile.png'
  }, {
    audio: './sounds/beat-china.wav',
    picture: './images/overbite.png'
  }, {
    audio: './sounds/whats-going-on.mp3',
    picture: './images/open.png'
  }, {
    audio: './sounds/i-like-china.mp3',
    picture: './images/surprised.png'
  }, {
    audio: './sounds/beef.mp3',
    picture: './images/serious.png'
  }, {
    audio: './sounds/nuclear.mp3',
    picture: './images/open.png'
  }, {
    audio: './sounds/bing-bong.mp3',
    picture: './images/closed.png'
  }, {
    audio: './sounds/illegal.mp3',
    picture: './images/thinking.png'
  }, {
    audio: './sounds/dont-like-that.mp3',
    picture: './images/sick.png'
  }
]

head.addEventListener('click', event => {
  const randomAnimation = Math.floor(Math.random() * animations.length)
  const audio = new Audio(animations[randomAnimation].audio)
  audio.play()
  head.src = animations[randomAnimation].picture
  setTimeout(() => head.src = './images/neutral.png'
,1000)
})
