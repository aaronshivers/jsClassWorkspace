const clock = document.getElementById('clock')
const now = moment()

clock.innerHTML = now.format('MMMM Do YYYY, h:mm:ss a')

setInterval(() => {
  clock.innerHTML = now.add(1, 'second').format('MMMM Do YYYY, h:mm:ss a')
}, 1000)
