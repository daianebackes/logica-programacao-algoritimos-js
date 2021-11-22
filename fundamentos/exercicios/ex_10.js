function simboloMais(a) {
    let resultado = "";
    for(let i = 0; i < a; i++) {
        resultado = resultado + "+";
    }
    return resultado;
}

console.log(simboloMais(3))