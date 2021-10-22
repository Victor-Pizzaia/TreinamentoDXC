console.log(soma(3, 4)) // o interpretador ja carregou as funções de function declaration
// console.log(sub(3, 4)) ele não encontra

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}
