let valor // não inicializada = undefined
console.log(valor)

valor = null // ausência de valor, ausencia de valor = null
console.log(valor)

const produto = {}
console.log(produto.preco) // volta undefined
console.log(produto) // retorna {}

produto.preco = 3.50
console.log(produto) // erro = produto is not defined

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)