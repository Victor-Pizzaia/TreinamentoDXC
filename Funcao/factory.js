// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Escada', 29.90))
// Produto prod = new Produto('Escada', 29.90)
console.log(criarProduto('Notebook', 2199.49))
