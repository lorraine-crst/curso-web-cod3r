console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

/*
Igualdade **`==` //** compara **apenas VALORES**
    Desigualdade**`!=` // não** igual à **VALOR**
    igualdade estrita **`===` //** compara os **VALORES** e **TIPOS**
    desigualdade estrita **`!==` // não** igual **VALOR e TIPO**
    
2 == 2 // -> true
6 == '6' // -> true
1 != 5  // -> true
10 === 10  // -> true
8 === '8'  // -> false
7 !== 7 // -> false
3 !== '3' // -> true



    **`>`** Maior que o operador
    
    **`>=`** Operador maior ou igual
    
    **`<`** Operador menor que
    
    **`<=`** Operador menor ou igual

*/