function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        throw {
            nome: error.name,
            msg: error.message,
            date: new Date
        }
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)

const obj2 = {nome: 'Roberto'}
imprimirNomeGritado(obj2)
