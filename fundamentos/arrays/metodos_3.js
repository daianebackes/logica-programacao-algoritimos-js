const numeros = [10, 20, 30, 40];

function paraCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros.forEach(paraCadaElemento);

numeros.forEach(function (el) {
    console.log(el);
});

numeros.forEach(function (_, i) {
    console.log(i);
});

//for(let n of numeros){
//   console.log(n);
//}

//for(let i = 0; i < numeros.length; i++) {
//  console.log(numeros[i]);
//}