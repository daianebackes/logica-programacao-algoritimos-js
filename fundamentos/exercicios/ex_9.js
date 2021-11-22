function repetir(a, b) {
    var lista = [];
    for (i = 0; i < b; i++) {
        lista.push(a);
    }
    return lista;
}

console.log(repetir("parabéns", 4));