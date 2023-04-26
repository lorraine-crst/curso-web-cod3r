const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna a letra do indice 4
console.log(escola.charAt(5)) //retorna a letra do indice 5, retorna vazio pois nao tem 5 na nossa strings
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) //vai do indice 1 ate o final
console.log(escola.substring(0, 3)) //vai do indice 0 ate o indice 3 sem contar o 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //pega um indice 3 e substitui

console.log('Ana,Maria,Pedro'.split(','))