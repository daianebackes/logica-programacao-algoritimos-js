function receberPrimeiroEUltimoElemento(lista) {
    let resultado = [];
    resultado.push(lista[0]);
    resultado.push(lista[lista.length - 1]);
    return resultado;
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]));