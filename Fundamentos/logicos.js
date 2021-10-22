function compra(t1, t2) {
    const comprarSorvete = t1 || t2 // ou
    const comprarTv = t1 && t2 // e
    const comprarMicroondas = t1 != t2 // diferente
    const manterSaudavel = !comprarSorvete // unário

    return {comprarSorvete, comprarTv, comprarMicroondas, manterSaudavel}
}

console.log(compra(true, true))
console.log(compra(true, false))
console.log(compra(false, true))
console.log(compra(false, false))
