let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //! = negação !!= volta para o valor original, volta em boolean

//os verdadeiros, numero inteiro sem contar o 0 sempre volta inteiro
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // string vazio e vdd
console.log(!!'texto') // string e vdd
console.log(!![])// obj vazio e vdd
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))


let nome = 'Lucas'
console.log(nome || 'Desconhecido') // volta lucas
let nome1 = ''
console.log(nome1 || 'Desconhecido') // volta desconhecido