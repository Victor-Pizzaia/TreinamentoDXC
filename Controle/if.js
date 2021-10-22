function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com: ${nota}`)
    } else if (nota >= 4) {
        console.log('Em Recuperação')
    } else {
        console.log(reprovado)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

const conta = 3 + 2
const ternario = conta === 5 ? 'verdadeio' : 'falso'
