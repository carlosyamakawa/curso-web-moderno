const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // não vai criar novo elemento, precisam ser sempre diferentes

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)

console.log(nomes)
console.log(nomesSet)