const prod1 = {} // {} - forma literal de se criar um objeto
prod1.nome =  'Celular Ultra Mega' // chave valor, cria dinamicamente a chave
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    legal() {
        return 'teste'
    }
}

'{"nome": "Camisa Polo", "preco": 79.90}' // isso é um json

console.log(prod2)
console.log(prod2.legal())
