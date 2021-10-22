const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p) {
    if (p.fragil === false) return p;
}))

const caro = e => e.preco >= 500
const frageis = e => e.fragil

let produtosCaros = produtos.filter(caro).filter(frageis)
console.log(produtosCaros)
