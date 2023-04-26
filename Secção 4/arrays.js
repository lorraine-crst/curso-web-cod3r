const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // manda os resultados para o final do array
console.log(valores)

console.log(valores.pop()) // retira o ultimo item do array
delete valores[0]
console.log(valores)

console.log(typeof valores) //(um array é um objeto em js)