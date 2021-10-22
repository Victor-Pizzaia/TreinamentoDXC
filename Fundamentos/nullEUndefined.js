let valor // não incializada
// console.log('(01)', valor)

valor = null // ausência de valor - não aponta para lugar nenhum na memoria
console.log('(02)', valor)
// console.log(valor.toString())

// null a gente n tem valor e undefined ele n está definido

const produto = {}
console.log('(03)', produto.preco)
console.log('(04)', produto)

produto.preco = 3.50
console.log('(05)', produto)

produto.preco = undefined // evite atribuir undefined
console.log('(06)', !!produto.preco)
console.log('(07)', produto)

produto.preco = null // sem preço
console.log('(08)', !!produto.preco)
console.log('(09)', produto)
