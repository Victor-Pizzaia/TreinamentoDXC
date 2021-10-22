const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // Criando JSON apartir de obj

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
// console.log(JSON.parse(" {'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse(' {"a": 1, "b": 2, "c": 3} ')) // Criando obj apartir de um JSON
console.log(JSON.parse(' {"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
