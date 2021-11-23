function receberSomenteParDeIndicePar(lista) {
    let novaLista = [];
  
    // for(let i = 0; i < lista.length; i++) {
    //   let isIndicePar = i % 2 === 0;
    //   let isElementoPar = lista[i] % 2 === 0;
  
    //   if(isIndicePar && isElementoPar) {
    //     novaLista.push(lista[i]);
    //   }
    // }
  
    lista.forEach(function (elemento, index) {
      let isIndicePar = index % 2 === 0;
      let isElementoPar = elemento % 2 === 0;
  
      if (isIndicePar && isElementoPar) {
        novaLista.push(elemento);
      }
    })
  
    return novaLista;
  }
  
  console.log(receberSomenteParDeIndicePar([10, 70, 22, 43]));