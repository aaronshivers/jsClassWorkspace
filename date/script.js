const time = document.getElementById('time')

const now = moment()
time.innerHTML = now.format('MMMM Do YYYY, h:mm:ss a')

setInterval(() => {
  time.innerHTML = now.add(1, 'second').format('MMMM Do YYYY, h:mm:ss a')
}, 1000)
