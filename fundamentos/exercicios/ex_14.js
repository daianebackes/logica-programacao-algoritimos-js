function somarNumeros(lista) {
    let resultado = 0;
  
    lista.forEach(function (elemento) {
      resultado += elemento;
    })
  
    return resultado;
  }
  
  console.log(somarNumeros([5, 10, 100, 0]));