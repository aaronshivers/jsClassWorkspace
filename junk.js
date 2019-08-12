var studentScores = [72, 83, 34, 73, 34]
var studentAvg = 0

for (var i = 0; i < studentScores.length; i++) {
  studentAvg += studentScores[i]
}

var result = studentAvg / studentScores.length

if (result > 90) {
  console.log('you got a scholorship')
} else {
  console.log('better luck next time')
}