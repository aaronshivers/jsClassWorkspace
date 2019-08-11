const app = document.getElementById('app')

const head = document.createElement('img')
head.setAttribute('id', 'head')
head.classList.add('head')
head.src = './images/neutral.png'
app.appendChild(head)

const body = document.createElement('img')
body.setAttribute('id', 'body')
body.classList.add('body')
body.src = './images/body.png'
app.appendChild(body)

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
  console.log(randomAnimation)
  const audio = new Audio(animations[randomAnimation].audio)
  audio.play()
  head.src = animations[randomAnimation].picture
  setTimeout(() => head.src = './images/neutral.png'
,1000)
})



