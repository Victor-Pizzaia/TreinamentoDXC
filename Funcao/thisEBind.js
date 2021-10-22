const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        // console.log(saudacao) => ele da erro por conta que saudacao n existe dentro da função
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // a função bind define qual vai ser o obj do this
falarDePessoa()
