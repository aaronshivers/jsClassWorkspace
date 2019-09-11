const trackVowels = word => word.toLowerCase().split('').filter(char => char.match(/[a,e,i,o,u]/)).length

console.log(trackVowels('hello world'))