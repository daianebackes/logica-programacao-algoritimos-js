function filtrarNumero(lista) {
    let novaLista = [];
  
    // for(let i = 0; i < lista.length; i++) {
    //   if(typeof lista[i] === "number") {
    //     novaLista.push(lista[i]);
    //   }
    // }
  
    lista.forEach(
      function (elemento) {
        if(typeof elemento === "number") {
          novaLista.push(elemento);
        }
      }
    )
  
    return novaLista;
  }
  
  console.log(filtrarNumero(["Javascript", 1, "3", "Web", 20]));