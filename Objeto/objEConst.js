// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' // não muda o endereço de memoria, só o valor que está
console.log(pessoa)

// pessoa -> 456 -> {...} tentando fazer a váriavel apontar pra outro endereço
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // Congelando o objeto - você torna ele constante, não pode alterar nem adicionar nem excluir

pessoa.nome = 'Maria' // não consegue mais alterar o valor
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome)
