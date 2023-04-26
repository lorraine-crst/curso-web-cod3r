// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // vai pegar os 2 peimeiros e ignorar o resto
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) /*b por padrao esta como 1*/{
    return a + b // quando tem return nao precisa chamar a funçao depois
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())