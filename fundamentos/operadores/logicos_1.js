let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - vai pro shopping?';
resultadoE += temDinheiro && estaEnsolarado;  // concatenar a resposta da expressao 
console.log(resultadoE);

let resultadoOU = "#2 (OR) - vai para o shopping?";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true !== true);   //ou exclusivo
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log("não verdadeiro : " + !true);  //negação / not
console.log("não falso : " + !false);